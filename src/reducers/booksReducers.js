"use strict"
import {createStore} from 'redux';
// books reducers

export function booksReducers(state={books:[]}, action){
  switch (action.type){
    case "POST_BOOK":
    // let books = state.books.concat(action.payload)
    // return books;
    return {books: [...state.books, ...action.payload]}
    break;
    case "DELETE_BOOK":
    //create a copy of the current array of books
    const currentBookToDelete = [...state.books]
    //determine at which index in array this book should be deleted
    const indexToDelete = currentBookToDelete.findIndex(
      function(book) {
        return book.id === action.payload.id;
      }
    )
    return {books: [...currentBookToDelete.slice(0, indexToDelete),
    ...currentBookToDelete.slice(indexToDelete + 1)]}
    break;

    case "UPDATE_BOOK":
    //create a copy of the current array of books
    const currentBookToUpdate = [...state.books]
    //determine at which index in array this book should be updated
    const indexToUpdate = currentBookToUpdate.findIndex(
      function(book) {
        return book.id === action.payload.id;
      }
    )

    // Create a new book object with the new values and with the same array index of the item we want to replace. To achieve this we will use ...spread but we could use concat method too.

    const newBookToUpdate = {
      ...currentBookToUpdate[indexToUpdate],
      title: action.payload.title
    }

    // this log shows what the newBookToUpdate looks like
    console.log("What is newBookToUpdate:", newBookToUpdate);

    return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate,
    ...currentBookToUpdate.slice(indexToUpdate + 1)]}
    break;
  }
  return state
}
