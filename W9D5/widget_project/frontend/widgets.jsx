import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tab from './tab';
import Page from './page';


document.addEventListener("DOMContentLoaded", function () {
  const root = document.querySelector('.root');

  ReactDOM.render(<Page />, root);
});