import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import colors from "./color-data";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export const ColorContext = createContext();

ReactDOM.render(
  <ColorContext.Provider value={{colors}}>
    <App />
  </ColorContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
