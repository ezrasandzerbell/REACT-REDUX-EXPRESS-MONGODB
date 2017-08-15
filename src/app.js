"use strict"
import {createStore} from 'redux';

// Import combinedReducers

import reducers from './reducers/index'

//STEP 1 create the store

const store = createStore(reducers);

store.subscribe(function(){
  console.log('current state is:', store.getState());
})

// STEP 2 create and dispatch actions
store.dispatch({
  type:"POST_BOOK",
  payload: [{
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
})

store.dispatch({
  type:"DELETE_BOOK",
  payload: {id: 1}
})

store.dispatch({
  type:"UPDATE_BOOK",
  payload: {
    id: 2,
    title: "Learn React!"
  }
})
