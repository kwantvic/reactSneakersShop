import React from 'react';

import { Link } from 'react-router-dom';
import { useCart } from '../hooks/UseCart';

function Header(props) {
  const { totalPrice } = useCart();
  return (
    <header className="d-flex justify-between p-40 ">
      <Link to="/">
        <div className="align-center d-flex ">
          <img width={40} height={40} src="img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="headerRight d-flex align-center ">
        <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <img width={18} height={18} src="img/basket.svg" alt="Корзина" />
          <span>{totalPrice} грн</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img width={18} height={18} src="img/heart.svg" alt="Закладки" />
          </Link>
        </li>
        <li>
          <Link to="/orders ">
            <img width={18} height={18} src="img/user.svg" alt="Пользователь" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
