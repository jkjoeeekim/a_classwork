import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock'
import Tab from './tab'


document.addEventListener("DOMContentLoaded", function () {
  const root = document.querySelector('.root')
  let clock = document.createElement('div');
  root.appendChild(clock);
  
  ReactDOM.render(<Clock />, clock);
  ReactDOM.render(<Tab />, root);
})