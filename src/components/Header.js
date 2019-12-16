import React from 'react';
import Search from "./Search"

const Header = (props) => {

  return (
    <header className="header">
      <div className="header__wrapper">
        <a className="header__logo" href="/site">MercadoLibre</a>
        <div className="header__inner">
          <Search {...props} />
        </div>
      </div>
    </header>
  );
}

export default Header;
