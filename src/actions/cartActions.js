"use strict"

// ADD to cart
export function addToCart(book) {
    return {
        type: "ADD_TO_CART",
        payload: book
    }
};

// DELETE FROM cart
export function deleteCartItem(cart) {
    return {
        type: "DELETE_CART_ITEM",
        payload: cart
    }
}
