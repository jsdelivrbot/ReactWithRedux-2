import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SelectBook } from '../actions/index';

class BooksList extends Component {
    render() {
        //console.log(this.props.books);
        return (
            <ul className = "list-group col-sm-4">
                { this.renderList() }
            </ul>
        );
    }

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key = { book.key }
                    className = "list-group-item"
                    onClick = { () => this.props.selectedBook(book) }
                >
                    { book.title }
                </li>
            );
        });
    }
}

/*
 * If a component doesn't have any connection with Redux, it's a Damn Component
 * A Container is React Component that has a direct connection to the State managed by Redux.
 * Container is just a component that has direct access to the state produced by Redux.
 * 
 * This function is the Glue between React and Redux
 */

function MapStateToProps(state) {
    // whatever is returned from this function will show up as props
    // inside of BookList class above
    return (
        {
            books: state.booksList
        }
    );
}

/*
 * Anything returned from MapDispatchToProps function will end up as props
 * on the BookList container, so, this.props.selectedBook will call the Action Creator
 * in this case SelectBook
 * 
 * Whenever selectedBook is called, the result should be passed to
 * all of our reducers ( thst's what bindActionCreators does with dispatch )
 * dispathc function receives the result and spits them to the different
 * reducers in the application
 * 
 */ 
function MapDispatchToProps(dispatch) {
    return (
        bindActionCreators({
            selectedBook: SelectBook
        }, dispatch)
    );
}

/*
 * connect takes a function and a component and prduces a container
 */
export default connect (MapStateToProps, MapDispatchToProps) (BooksList);
