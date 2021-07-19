import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tab from './tab';
import Page from './page';


document.addEventListener("DOMContentLoaded", function () {
  const root = document.querySelector('.root');
  const tabs = [
    {title: "one", content: "I am the first"},
    {title: "two", content: "I am the second"},
    {title: "three", content: "I am the third"}
  ]

  ReactDOM.render(<Page tabs={tabs}/>, root);
});