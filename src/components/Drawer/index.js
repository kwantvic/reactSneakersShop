import React from 'react';
import axios from 'axios';

import Info from '../Info';
import { useCart } from '../../hooks/UseCart';

import styles from './Drawer.module.scss';

const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));

function Drawer({ onClose, onRemove, items = [], opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplite, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://614a23f707549f001755a807.mockapi.io/orders/', {
        items: cartItems,
      });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://614a23f707549f001755a807.mockapi.io/cart/' + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert('Ошибка при создании заказа :(');
    }
    setIsLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}>
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img className="removeBtn cu-p" src="img/btn-remove.svg" alt="Remove" onClick={onClose} />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items flex">
              {items.map((obj) => (
                <div key={obj.id} className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price}</b>
                  </div>
                  <img
                    className="removeBtn"
                    src="img/btn-remove.svg"
                    alt="Remove"
                    onClick={() => {
                      onRemove(obj.id);
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="cartTotalBlock">
              <ul>
                <li className="d-flex">
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} грн</b>
                </li>
                <li className="d-flex">
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{Math.round((totalPrice / 100) * 5)} грн</b>
                </li>
              </ul>

              <button desabled={isLoading} onClick={onClickOrder} className="greenButton">
                Оформить заказ
                <img src="img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplite ? 'Заказ оформлен!' : 'Корзина пустая'}
            image={isOrderComplite ? 'img/complete-order.jpg' : 'img/empty-cart.jpg'}
            description={
              isOrderComplite
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовок чтобы сделать заказ.'
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
