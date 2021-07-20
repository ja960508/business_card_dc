import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import style from './login.module.css';

const Login = ({ authService }) => {
  const history = useHistory();

  const goToMaker = (id) => {
    history.push({
      pathname: '/maker',
      state: { id: id },
    });
  };

  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent)
      .then((data) => {
        goToMaker(data.user.uid);
      })
      .catch(console.error);
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.id);
    });
  });

  return (
    <section className={style.section}>
      <Header />
      <h1>Login</h1>
      <ul className={style.loginMode}>
        <li className={style.item}>
          <button className={style.loginButton} onClick={onLogin}>
            Google
          </button>
        </li>
        <li className={style.item}>
          <button className={style.loginButton} onClick={onLogin}>
            Github
          </button>
        </li>
      </ul>
      <Footer />
    </section>
  );
};

export default Login;
