import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'

class App extends Component {

state = {
	books: []
}

componentDidMount(){
	BooksAPI.getAll().then((books) => {
		this.setState({books: books})
		console.log(books);
	})
}

render() {
	return (
		<div>
			hello from root
      </div>
	)
}
}

export default App;