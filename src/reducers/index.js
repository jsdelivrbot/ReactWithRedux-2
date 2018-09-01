import { combineReducers } from 'redux';

import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
    booksList: BooksReducer
})

export default rootReducer;

/*
 * Here, I added the BooksReducer into the combineReducers call
 * This reducer adds a KEY to the Global Application State called books
 * => key is books and value is retuned values
 * 
 * The wiring up of the Reducer is done inside the combineReducers function
 * where the Key was the piece of the state ( books ) and the value is the Reducer itself
 */


/*
 * After wiring up, I need to change the Reducer state into usable state
 * So, I will create a file into Components folder
 */

