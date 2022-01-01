import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import './bootstrap.min.css';
import App from './App';
import store from './redux/store';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000/"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);