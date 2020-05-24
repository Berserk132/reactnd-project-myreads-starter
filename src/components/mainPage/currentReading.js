import React, {Component} from 'react'
import Book from '../book'

class CurrentReading extends Component{

    render() {

        const {books, onMoveBook} = this.props

        return(

            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map(b => (
                            b.shelf === 'currentlyReading' &&
                            <Book
                                key = {b.id}
                                bookToShow = {b}
                                onMove = {onMoveBook}
                            />
                        ))}

                    </ol>
                </div>
            </div>
        )
    }
}

export  default CurrentReading