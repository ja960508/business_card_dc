import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CardMaker from '../cardMaker/cardMaker';
import CardPreview from '../cardPreview/cardPreview';
import Footer from '../footer/footer';
import Header from '../header/header';
import style from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'lee',
      company: 'school',
      theme: 'dark',
      job: 'engineer',
      email: 'ja@naver.com',
      message: 'Hello World',
      fileName: 'file',
      fileURL: null,
    },
    {
      id: '2',
      name: 'lee',
      company: 'school',
      theme: 'dark',
      job: 'engineer',
      email: 'ja@naver.com',
      message: 'Hello World',
      fileName: 'file',
      fileURL: null,
    },
    {
      id: '3',
      name: 'lee',
      company: 'school',
      theme: 'light',
      job: 'engineer',
      email: 'ja@naver.com',
      message: 'Hello World',
      fileName: 'file',
      fileURL: null,
    },
  ]);
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
      <main className={style.maker}>
        <CardMaker cards={cards} />
        <CardPreview cards={cards} />
      </main>
      <Footer />
    </section>
  );
};

export default Maker;
