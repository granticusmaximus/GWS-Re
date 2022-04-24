import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    if (module.hot) {
      module.hot.accept()
    }
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
