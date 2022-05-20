import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';

import Bootstrap from './ts/Bootstrap';

ReactDOM.render(
  <React.StrictMode>
    <Bootstrap />
  </React.StrictMode>,
  document.querySelector('#root'),
);
