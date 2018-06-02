import React, { Component } from 'react'
import Book from './Book'

class BookSearchResults extends Component {
    render() {
        const {books, handleBookShelfChange} = this.props
        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    { books.map( book => (
                        <Book
                            key={book.id}
                            book={book}
                            handleBookShelfChange={newShelf => handleBookShelfChange(book, newShelf)} 
                        />
                    ))}
                </ol>
            </div>
        )
    }
}

export default BookSearchResults