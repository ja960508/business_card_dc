import React from 'react';
import style from './header.module.css';

const Header = ({ onLogout }) => (
  <header className={style.header}>
    {onLogout && (
      <button onClick={onLogout} className={style.logout}>
        Logout
      </button>
    )}
    <img src="/images/logo.png" alt="logo" className={style.logo} />
    <h1 className={style.title}>Business Card Maker</h1>
  </header>
);

export default Header;
<h1>header</h1>;
