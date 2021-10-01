import React from 'react';
import styles from './Card.module.scss';

function Card({ id, imageUrl, title, price, onClickFavorite, onClickPlus, favorited = false }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onPlus = () => {
    onClickPlus({ imageUrl, title, price });
    setIsAdded(!isAdded);
  };

  const onClicFavorite = () => {
    onClickFavorite({ id, imageUrl, title, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div onClick={onClicFavorite} className={styles.favorite}>
        <img src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt="Unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        <img
          className={styles.plus}
          onClick={onPlus}
          src={isAdded ? 'img/btn-checked.svg' : 'img/btn-plus.svg'}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
