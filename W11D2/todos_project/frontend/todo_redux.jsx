import React from "react";
import ReactDOM from "react-dom";
import Store from './store/store';
import Root from "./components/root";
import { receiveTodo, receiveTodos, removeTodo } from "./actions/todo_actions"
import { receiveStep, receiveSteps, removeStep } from "./actions/steps_actions"
import { allTodos, stepsByTodoId } from "./reducers/selectors"

document.addEventListener("DOMContentLoaded", function () {
  let root = document.getElementById("root");
  const store = Store();
  window.store = store;

  // for testing purpose, put methods onto windows. 
  // window.receiveTodo = receiveTodo;
  // window.receiveTodos = receiveTodos;
  // window.removeTodo = removeTodo;
  // window.receiveSteps = receiveSteps;
  // window.receiveStep = receiveStep;
  // window.removeStep = removeStep;
  // window.allTodos = allTodos;
  window.stepsByTodoId = stepsByTodoId;

  ReactDOM.render(<Root store={store} />, root);
});


// const newTodos = [{ id: 1, title: 'Learn Redux', body: 'It is fundamental', done: false }, { id: 2, title: 'Learn Redux2', body: 'It is fundamental2', done: true }, { id: 3, title: 'Learn Redux3', body: 'It is fundamental3', done: false }];
// const newSteps = [{ id: 1, title: 'Dispatch actions', done: false, todo_id: 1 }, { id: 2, title: 'Dispatch actions2', done: true, todo_id: 1 }];

