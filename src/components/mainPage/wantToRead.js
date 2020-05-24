import React, {Component} from 'react'
import Book from '../book'

class WantToRead extends Component{

    render() {

        const {books, onMoveBook} = this.props

        return(

            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map(b => (
                            b.shelf === 'wantToRead' &&
                            <Book
                                key = {b.id}
                                bookToShow = {b}
                                onMove ={onMoveBook}
                            />
                        ))}

                    </ol>
                </div>
            </div>
        )
    }
}

export  default WantToRead