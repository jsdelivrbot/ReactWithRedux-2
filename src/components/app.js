import React, { Component } from 'react';

import BooksList from '../containers/book-list';

export default class App extends Component {
  render() {
    return (
      <div>
          <BooksList />
      </div>
    );
  }
}
