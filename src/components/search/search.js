import React, {Component} from 'react'
import {Link} from "react-router-dom";
import SearchResult from "./searchResult";

class Search extends Component{

    state = {
        value:"",
    }

    handleInput = (event) => {
        const newValue = event.target.value
        
        this.setState(
            {
                value: newValue
            }
        )
        if (newValue.length > 0) {

            this.props.onSearch(newValue)

        }
        else if (newValue.length === 0){
            this.props.onClear()
        }
        
    }



    render() {

         const {booksToShow, onMove, books} = this.props


        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            defaultValue={""}
                            onChange={this.handleInput}
                        />
                    </div>
                </div>
                <SearchResult
                    booksToShow={booksToShow}
                    onMove={onMove}
                    books={books}
                />
            </div>
        )
    }
}

export  default Search