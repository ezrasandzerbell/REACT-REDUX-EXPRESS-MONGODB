"use strict"

// CART REDUCERS
export function cartReducers(state = { cart: [] }, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return {...state, cart: action.payload }
            break;
        case "UPDATE_CART":
          //create a copy of the current array of books
          const currentBookToUpdate = [...state.cart]
          //determine at which index in array this book should be updated
          const indexToUpdate = currentBookToUpdate.findIndex(
            function(book) {
              return book._id === action._id;
            }
          )

          const newBookToUpdate = {
            ...currentBookToUpdate[indexToUpdate],
            quantity: currentBookToUpdate[indexToUpdate].quantity + action.unit
          }

          let cartUpdate = [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate,
          ...currentBookToUpdate.slice(indexToUpdate + 1)]

          return {...state,
            cart: cartUpdate
          }
            break;
        case "DELETE_CART_ITEM":
            return {...state, cart: action.payload }
            break;
    }

    return state;
}
