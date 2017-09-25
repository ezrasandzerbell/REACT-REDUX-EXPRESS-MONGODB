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
import Menu from './components/menu';
import Footer from './components/footer';

render(
  <Provider store={store}>
    <div>
      <Menu />
      <BooksList />
      <Footer />
    </div>

  </Provider>, document.getElementById('app')
);

// STEP 2 create and dispatch actions
// store.dispatch(postBooks(
//
// ))
