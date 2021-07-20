import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import style from './maker.module.css';

const Maker = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  return (
    <section className={style.section}>
      <Header onLogout={onLogout} />
      <main className={style.maker}>maker</main>
      <Footer />
    </section>
  );
};

export default Maker;
