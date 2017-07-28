import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends React.Component {
  static propTypes = {
    updateBook: PropTypes.func.isRequired,
    bookIds: PropTypes.array.isRequired,
    bookShelves: PropTypes.array.isRequired
  }

  state = {
    query: "",
    books: []
  }

  getBooks = query => {
    if (query.length) {
      this.setState({ query: query.trim() })
      BooksAPI.search(query).then(books => {
        this.setState({ books: this.syncShelves(books) });
      })
    } else {
      this.setState({ query, books: [] })
    }
  }

  syncShelves = books => {
    return books.map(book => {
      let index = this.props.bookIds.indexOf(book.id)
      if (index !== -1) {
        book.shelf = this.props.bookShelves[index];
        return book;
      } else {
        book.shelf = "none";
        return book;
      }
    })
  }

  render() {
    const { query, books} = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={e => this.getBooks(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {Array.isArray(books) && books.map(book => (
              <Book
                key={book.id}
                book={book}
                updateBook={this.props.updateBook}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks