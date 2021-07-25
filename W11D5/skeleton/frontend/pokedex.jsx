import React from 'react';
import ReactDOM from 'react-dom';
import * as api_util from './util/api_util'
import {receiveAllPokemon} from './actions/pokemon_actions'
import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {
    let root = document.getElementById('root');
    // debugger;
    window.fetchAllPokemon = api_util.fetchAllPokemon;
    window.receiveAllPokemon = receiveAllPokemon;
    window.store = configureStore;
    // window.getState = store.getState();
    // window.dispatch = store.dispatch();

    ReactDOM.render(<h1>Hello</h1>, root);
});