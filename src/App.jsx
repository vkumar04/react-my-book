import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'

import ListBooks from './ListBooks';

class App extends Component {

	state = {
		books: [],
		read: [],
		wantToRead: [],
		currentlyReading: []
	}

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({ books: books })
			console.log(books);
		})
	}

	updateShelves = () => {
		const {books} = this.state
		let currentlyReading = books.filter((book) => book.shelf === 'currentlyReading')
		let wantToRead = books.filter((book) => book.shelf === 'wantToRead')
		let read = books.filter((book) => book.shelf === 'read')
		this.setState({currentlyReading, wantToRead, read})
	}

	render() {
		return (
			<div>
				<ListBooks books={this.state.books}/>
      </div>
		)
	}
}

export default App;