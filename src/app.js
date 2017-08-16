"use strict"

// React
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

// Import combinedReducers

import reducers from './reducers/index'

// import actions

import {addToCart} from './actions/cartActions'
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions'
//STEP 1 create the store
const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware);

import BooksList from './components/pages/bookslist';

render(
  <Provider store={store}>
    <BooksList />
  </Provider>, document.getElementById('app')
);

// STEP 2 create and dispatch actions
store.dispatch(postBooks(
  [{
    id: 1,
    title: 'this is the title yo',
    description: 'said this is the description, jo!',
    price: 10.5
  },
  {
    id: 2,
    title: 'second title',
    description: 'second description!',
    price: 15
  }]
))
