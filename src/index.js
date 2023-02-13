import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import {store} from "./store";
import {Provider} from "react-redux";

// console.log('Initial state: ', store.getState());
//
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' });
// console.log('Initial state: ', store.getState());
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers' });
// console.log('Initial state: ', store.getState());
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores' });
// console.log('Initial state: ', store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
