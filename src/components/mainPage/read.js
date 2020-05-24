import React, {Component} from 'react'
import Book from '../book'

class Read extends Component{

    render() {

        const {books, onMoveBook} = this.props

        return(

            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map(b => (
                            b.shelf === 'read' &&
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

export  default Read