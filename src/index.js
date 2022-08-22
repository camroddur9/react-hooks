import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeContext from './context/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext.Provider value="blue">
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

