import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.style.css';
import './styles/main.style.scss';
import reportWebVitals from './reportWebVitals';
import { App } from './components';
import { FirebaseContext } from './contexts';
import { Firebase } from './config';
const firebase = new Firebase();
ReactDOM.render(
  <React.StrictMode>
      <FirebaseContext.Provider value={firebase}>
        <App />
      </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
