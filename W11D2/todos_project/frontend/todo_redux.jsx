import React from "react";
import ReactDOM from "react-dom";
import Receive_todo from './actions/todo_actions';

document.addEventListener("DOMContentLoaded", function () {
  let root = document.getElementById("root");

  ReactDOM.render(<h1>Todos App</h1>, root);
});