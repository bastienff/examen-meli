import React from 'react';

const ItemList = (props) => {

    let { items } = props

    return (
        <ul className="itemlist">
            {
                items.map((item, i) => {
                    return (
                        <a key="i" className="itemlist__item" href={`/site/items/${item.id}`}>
                            <div className="itemlist__thumb">
                                <img src={item.picture} alt={item.title} />
                            </div>
                            <div className="itemlist__info">
                                <span className="itemlist__precio">$ {item.price.amount}</span>
                                {item.free_shipping && <i className="itemlist__despacho"></i>}
                                <p className="itemlist__titulo">{item.title}</p>
                            </div>
                            <div className="itemlist__ciudad">{item.city}</div>
                        </a>
                    )
                })
            }
        </ul>
    );
}

export default ItemList;
