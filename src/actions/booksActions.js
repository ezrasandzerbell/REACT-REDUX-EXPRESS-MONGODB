"use strict"

// Get books
export function getBooks() {
  return {
    type:"GET_BOOK"
  }
}

export function deleteBooks(id){
  return {
    type:"DELETE_BOOK",
    payload: id
  }
}

export function updateBooks(book){
  return {
    type:"UPDATE_BOOK",
    payload: book
  }
}

// Delete books

// Update books
