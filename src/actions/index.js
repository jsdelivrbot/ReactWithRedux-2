/*
 *
 */

export function SelectBook(book) {
    console.log('A book has been selected : ', book.key, ' - ', book.title);
    /*
     * SelectBook is an action creator, it needs to return an object with type property (action)
     * Action usually has usually two values a " type " and a " payload "
     * 
     * Payload - further describes/clarifies the condition of the action being triggered
     * Type - describes the purpose of the action
     */
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}

/*
 * Calling action creator ..
 * 1 - Action Creator is function that creates an object ( with type and some data )
 * 2 - Then the object is sent automatically sent to all Reducers inside of our application
 *     => the object has a type that describes the action triggered
 *     => and data
 *     the object is actually the ACTION
 * 3 - Reducer can choose, depending on the action, to return a different piece of state
 *     or remain the same
 * 4 - The newly returned piece of state gets piped into the application state and then
 *     the application state is pumped back to React App which causes all components to re-render
 * 
 * 
 */
