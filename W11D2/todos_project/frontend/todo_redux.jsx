import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import { receiveTodo, receiveTodos, removeTodo } from "./actions/todo_actions"
import { receiveStep, receiveSteps, removeStep } from "./actions/steps_actions"

document.addEventListener("DOMContentLoaded", function () {
  let root = document.getElementById("root");
  window.store = configureStore();
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.removeTodo = removeTodo;
  window.receiveSteps = receiveSteps;
  window.receiveStep = receiveStep;
  window.removeStep = removeStep;

  ReactDOM.render(<h1>Todos App</h1>, root);
});


// const newTodos = [{ id: 1, title: 'Learn Redux', body: 'It is fundamental', done: false }, { id: 2, title: 'Learn Redux2', body: 'It is fundamental2', done: true }, { id: 3, title: 'Learn Redux3', body: 'It is fundamental3', done: false }];
// const newSteps = [{ id: 1, title: 'Dispatch actions', done: false, todo_id: 1 }, { id: 2, title: 'Dispatch actions2', done: true, todo_id: 1 }];

