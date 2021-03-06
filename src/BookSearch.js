import React, { Component } from 'react'
import BookSearchBar from './BookSearchBar'
import BookSearchResults from './BookSearchResults'
import * as BooksAPI from './BooksAPI'
import PropTypes from "prop-types";

class BookSearch extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
    }

    state = {
        books : []
    }

    resetSearchResults() {
        this.setState({books:[]})
    }

    searchBooks(query) {
        const {booksOnShelf} = this.props

        if(query === '') {
            this.resetSearchResults()
        } else {
            BooksAPI.search(query).then(books => {
                if (typeof(books) === 'undefined' || books.error === "empty query") 
                    return this.resetSearchResults()
                
                books.map(book => {
                    let bookIndex = booksOnShelf.findIndex(bookOnShelf => bookOnShelf.id === book.id)
                    if(bookIndex > -1) {
                        book.shelf = booksOnShelf[bookIndex].shelf
                    } else {
                        book.shelf = 'none'
                    }
                    return book
                })
                this.setState({books})
            })
        }
    }

    render() {
        const { handleBookShelfChange} = this.props
        return (
            <div className="search-books">
                <BookSearchBar 
                    handleSearchQuery={(query) => this.searchBooks(query)} />
                <BookSearchResults 
                    books={this.state.books} 
                    handleBookShelfChange={(book, newShelf) => handleBookShelfChange(book, newShelf)} />
            </div>
        )
    }
}

export default BookSearch