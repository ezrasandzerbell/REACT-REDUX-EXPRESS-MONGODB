"use strict"
import {createStore} from 'redux';

//STEP 3 define reducers
const reducer = function(state={books:[]}, action){
  switch (action.type){
    case "POST_BOOK":
    // let books = state.books.concat(action.payload)
    // return books;
    return {books: [...state.books, ...action.payload]}
    break;
  }
  return state
}
//STEP 1 create the store

const store = createStore(reducer);

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
  type:"POST_BOOK",
  payload: [{
    id: 3,
    title: 'this is the third title yo',
    description: 'said this is the third description, jo!',
    price: 12.5
  }]
})
