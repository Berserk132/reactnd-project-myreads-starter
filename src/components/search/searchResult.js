import React, {Component} from 'react'
import Book from "../book";

class SearchResult extends Component{






    render() {

        console.log(this.props.booksToShow)
        const {booksToShow, onMove} = this.props

        return(
            <div className="search-books">

                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            booksToShow.length > 0 &&
                            booksToShow.map(b => (
                                <Book
                                    key = {b.id}
                                    bookToShow = {b}
                                    onMove={onMove}
                                />
                            ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export  default SearchResult