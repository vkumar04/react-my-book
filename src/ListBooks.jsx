import React, {Component} from 'react';

class ListBooks extends Component{
  render(props){
    return(
      <div>
        {props.books.shelf === 'wantToRead' && (
          <h1>{props.books}</h1>
        )}
      </div>
    )
  }
}

export default ListBooks;