import React, {Component} from 'react';
import {AiFillDelete} from 'react-icons/ai'
class BookList extends Component {

    deleteBook(book_id) {
        console.log(book_id)
        let books = JSON.parse(localStorage.getItem('books'))
        books = books.filter(book => book.id !== book_id)
        localStorage.setItem('books', JSON.stringify(books))
        this.setState({})
    }

    render() {
        let books = JSON.parse(localStorage.getItem('books'))
        if (books === null || books.length === 0) {
            return (
                <div></div>
            );
        }
        let listBooks = books.map((book, step) => {
            return (
                <li key={book.title}>
                    <div>
                    {book.title}
                    <AiFillDelete className={'delete'+String(book.id)}onClick={() => {
                        this.deleteBook(book.id)
                    }}/>
                    </div>
                </li>
            )
        })
        return (
            <div>
                <h3>My books</h3>
                <ol>
                    {listBooks}
                </ol>
            </div>
        );
    }
}

export default BookList;
