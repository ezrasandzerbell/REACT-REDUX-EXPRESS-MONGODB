"use strict"
import {combineReducers} from 'redux';

// here import REDUCERS to be combined

import {booksReducers} from './booksReducers'

// here combined the reducers

export default combineReducers({
  books: booksReducers
})
