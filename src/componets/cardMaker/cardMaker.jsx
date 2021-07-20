import React from 'react';
import CardAddForm from '../cardAddForm/cardAddForm';
import styles from './cardMaker.module.css';

const CardMaker = ({ cards }) => (
  <section className={styles.section}>
    <h1 className={styles.title}>Card Maker</h1>
    <ul className={styles.list}>
      {cards.map((card) => {
        return <CardAddForm card={card} />;
      })}
    </ul>
  </section>
);

export default CardMaker;
