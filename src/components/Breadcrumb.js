import React from 'react';

const Breadcrumbs = (props) => {

  const { search, categorias } = props;

  return (
    <ul className="breadcrumb">
      <li className="breadcrumb__item"><a href="/site">Inicio</a></li>
      {categorias && categorias.map((item) =>
        <li key={item.id} className="breadcrumb__item">{item.name}</li>
      )}
      {search && <li className="breadcrumb__item">"{search}"</li>}
    </ul>
  );
}

export default Breadcrumbs;
