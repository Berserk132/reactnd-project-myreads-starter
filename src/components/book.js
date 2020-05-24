import React, {Component} from 'react'



class Book extends Component{

    state = {
        value: this.props.bookToShow.shelf
    }

    handleSelectedValue = (event) => {
        const newValue = event.target.value
        this.setState(
            {
                value: newValue
            }
        )

        this.props.onMove(this.props.bookToShow, newValue)
        console.log(event.target.value)

    }

    render() {

        const {bookToShow} = this.props

        return(
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 192,
                            backgroundImage: `url(${bookToShow.imageLinks ? bookToShow.imageLinks.thumbnail : 'icons/book-placeholder.svg'})` }}/>
                        <div className="book-shelf-changer">
                            <select value={this.state.value} onChange={this.handleSelectedValue}>
                                <option value="move" disabled>Move to...</option>
                                <option  value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{bookToShow.title}</div>
                    <div className="book-authors">{bookToShow.authors}</div>
                </div>
            </li>
        )
    }
}

export default Book