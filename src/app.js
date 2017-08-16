"use strict"
import {createStore} from 'redux';

// Import combinedReducers

import reducers from './reducers/index'

// import actions

import {addToCart} from './actions/cartActions'
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions'
//STEP 1 create the store

const store = createStore(reducers);

store.subscribe(function(){
  console.log('current state is:', store.getState());
})

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

store.dispatch(deleteBooks(
  {id: 1}
))

store.dispatch(updateBooks(
  {
    id: 2,
    title: "Learn React!"
  }
))

// CART actions
// Add to CART

store.dispatch(addToCart({id: 1}))
