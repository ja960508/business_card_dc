import Login from './componets/login/login';
import style from './app.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Maker from './componets/maker/maker';

function App({ authService }) {
  return (
    <div className={style.app}>
      <BrowserRouter>
        <Switch>
          <Route path="/maker">
            <Maker authService={authService} />
          </Route>
          <Route path="/">
            <Login authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
