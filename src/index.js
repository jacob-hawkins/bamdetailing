import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Components/Main/Main.js';
import Nav from './Components/Nav/nav.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Main />
  </React.StrictMode>
);
