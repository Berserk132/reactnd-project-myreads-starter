import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import CurrentReading from './components/mainPage/currentReading'
import WantToRead from "./components/mainPage/wantToRead";
import Read from "./components/mainPage/read";
import Search from "./components/search/search";
import {Route} from 'react-router-dom'
import {Link} from "react-router-dom";


class BooksApp extends React.Component {
    state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
        books : [],
        searchedBook: [],
        changeRes: ""
    }


    componentDidMount = () => {
        BooksAPI.getAll()
            .then(books => {
                this.setState({ books: books });
            })
            .catch(err => {
                console.log(err)
            });
    };


    changeCategory = (book, shelf) => {

        BooksAPI.update(book, shelf).catch(error => {
            console.log(error)
        })

        book.shelf = shelf

        this.setState(currState =>({

            books : currState.books.filter(b => {
                return b.id !== book.id
            }).concat(book)
        }))


    }



    searchBooks = (query) => {

        BooksAPI.search(query)
            .then(res => {
                if (res.length > 0) {
                    res.map(book => {

                        book.shelf = "none"
                    })
                    this.setState({
                            searchedBook: res.map((b) => {
                                this.state.books.map(book => {

                                    if (book.id === b.id) {

                                        b.shelf = book.shelf


                                    }
                                    return book
                                })
                                return b
                            })
                        }
                    )
                }
            })
            .catch(error => {

                console.log(error)
            })


    }

    clearSearchHistory = () => {

        this.setState({
            searchedBook: []
        })
    }



    render() {

    return (
      <div className="app">
          <Route
              exact path="/"
              render={ () => (
                  <div className="list-books">
                      <div className="list-books-title">
                          <h1>MyReads</h1>
                      </div>
                      <div className="list-books-content">
                          <div>
                              <CurrentReading
                                  books = {this.state.books}
                                  onMoveBook = {this.changeCategory}
                              />
                              <WantToRead
                              books = {this.state.books}
                              onMoveBook = {this.changeCategory}
                              />
                              <Read
                              books = {this.state.books}
                              onMoveBook = {this.changeCategory}
                              />
                          </div>
                      </div>
                      <div className="open-search">
                          <Link to="/search">
                              <button >Add a book</button>
                          </Link>
                      </div>
                  </div>
              )}
          />
          <Route
              exact path="/search"
              render={(history) => (
                  <Search
                      booksToShow = {this.state.searchedBook}
                      onSearch = {this.searchBooks}
                      onClear = {this.clearSearchHistory}
                      onMove = {this.changeCategory}
                      history = {() => {
                          history.push('/')
                      }}
                  />
              )}
          />


      </div>
    )
    }
}

export default BooksApp
