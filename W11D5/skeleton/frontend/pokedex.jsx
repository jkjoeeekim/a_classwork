import React from 'react';
import ReactDOM from 'react-dom';
import * as api_util from './util/api_util'
import {receiveAllPokemon} from './actions/pokemon_actions'

document.addEventListener('DOMContentLoaded', () => {
    let root = document.getElementById('root');

    window.fetchAllPokemon = api_util.fetchAllPokemon;
    window.receiveAllPokemon = receiveAllPokemon;

    ReactDOM.render(<h1>Hello</h1>, root);
});