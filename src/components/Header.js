import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="d-flex justify-between p-40 ">
      <Link to="/">
        <div className="align-center d-flex ">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="headerRight d-flex align-center ">
        <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <img width={18} height={18} src="/img/basket.svg" alt="Корзина" />
          <span>5420 грн</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img width={18} height={18} src="/img/heart.svg" alt="Закладки" />
          </Link>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="Пользователь" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
