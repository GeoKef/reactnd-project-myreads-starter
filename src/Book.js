import React, { Component } from 'react'
import PropTypes from "prop-types";
import BookShelfChanger from './BookShelfChanger'


class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        changeShelf: PropTypes.func.isRequired
    };
    render() {
        const { book, handleBookShelfChange } = this.props
        let authors = (typeof book.authors !== 'undefined') ? book.authors.join(", ") : "";
        var bookCoverStyle = { width: 128, height: 193 }
        if(typeof(book.imageLinks) !== 'undefined') {
            bookCoverStyle.backgroundImage = `url("${book.imageLinks.thumbnail}")`
        } 
        
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={bookCoverStyle}></div>
                        <BookShelfChanger shelf={book.shelf} handleBookShelfChange={newShelf => handleBookShelfChange(newShelf)} />
                    </div>
                    <div className="book-title">{ book.title }</div>
                    <div className="book-authors">{ authors }</div>
                </div>
            </li>
        )
    }
}

export default Book