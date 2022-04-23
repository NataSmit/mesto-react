import React from 'react';
import logoHeader from '../images/logo.svg';

function Header(props) {
  return (
    <header className="header">
      <a href="#"><img className="header__logo" src={logoHeader} alt="Логотип Место"/></a>
    </header>
  )
}

export default Header;