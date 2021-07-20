import React from 'react';
import Card from '../cards/card';
import styles from './cardPreview.module.css';

const CardPreview = ({ cards }) => (
  <section className={styles.section}>
    <h1 className={styles.title}>Card Preview</h1>
    <ul className={styles.list}>
      {cards.map((card) => (
        <Card card={card} />
      ))}
    </ul>
  </section>
);

export default CardPreview;
