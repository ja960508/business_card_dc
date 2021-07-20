import React from 'react';
import styles from './cardAddForm.module.css';
import Button from '../button/button';
import ImageFileInput from '../imageFileInput/imageFileInput';

const CardAddForm = ({ card }) => {
  const { name, company, theme, email, message, job, fileURL } = card;
  const onClick = () => {
    console.log('1');
  };

  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" value={name} />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
      />
      <select className={styles.select} name="theme" value={theme}>
        <option value="dark">dark</option>
        <option value="light">light</option>
      </select>
      <input className={styles.input} type="text" name="job" value={job} />
      <input className={styles.input} type="text" name="email" value={email} />
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={onClick} />
    </form>
  );
};

export default CardAddForm;
