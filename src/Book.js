import React from 'react'
import PropTypes from 'prop-types'

class Book extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    updateBook: PropTypes.func.isRequired,
  }

  shelfChange(book, shelf) {
    book.shelf = shelf;
    this.props.updateBook(book, shelf);
  }

  render() {
    const { book } = this.props
    const styles = {
      width: 128,
      height: 193,
      backgroundImage: `url("${book.imageLinks && book.imageLinks.thumbnail}")`
    }
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={styles}></div>
            <div className="book-shelf-changer">
              <select
                value={book.shelf}
                onChange={e => this.shelfChange(book, e.target.value)}
              >
                <option disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">
            {book.title && book.title}
          </div>
          <div className="book-authors">
            {book.authors && book.authors.join(", ")}
          </div>
        </div>
      </li>
    )
  }
}

export default Book