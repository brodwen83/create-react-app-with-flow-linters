import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import AppContainer from './components/App/AppContainer';
import * as serviceWorker from './serviceWorker';

import './index.css';

const wrapper = document.getElementById('root');

if (wrapper)
  ReactDOM.render(
    <HashRouter>
      <AppContainer />
    </HashRouter>,
    wrapper
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
