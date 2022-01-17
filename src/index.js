import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import './bootstrap.min.css';
import App from './App';
import store from './redux/store';
import { CookiesProvider } from 'react-cookie'



ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
          <App />
      </Provider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);