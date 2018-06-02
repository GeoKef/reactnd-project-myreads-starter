import React, { Component } from 'react'
import Book from './Book.js'
import PropTypes from "prop-types";

class BookShelf extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        handleBookShelfChange: PropTypes.func.isRequired
    };
    
    render() {
        const { books, handleBookShelfChange } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ this.props.title }</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        { books.map( book => (
                          <Book
                            key={book.id}
                            book={book}
                            handleBookShelfChange={newShelf => handleBookShelfChange(book, newShelf)} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf