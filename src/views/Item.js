import React from 'react';
import BaseLayout from "../layouts/BaseLayout"

const Item = (props) => {

  return (
    <BaseLayout {...props}>
      <div className="main__wrapper">
        <div className="item">
          <div className="item__picture">
            <img src={props.picture} alt={props.title} />
          </div>
          <div className="item__info">
            <span className="item__state">
              {props.condition} - {props.sold_quantity} vendidos
            </span>
            <span className="item__titulo">{props.title}</span>
            <span className="item__precio">$ {props.price.amount}</span>
            <a className="item__comprar" href="">Comprar</a>
          </div>
          <div className="item__description">
            <h2 className="item__description__title">Descripción del producto</h2>
            <div className="item__description__text">
              {props.description}
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Item;
