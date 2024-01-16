import BooksGrid from "./BooksGrid";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Search Books Component
 * @param books
 * @param onShelfChange
 * @returns {JSX.Element}
 * @constructor
 */
const ListBooks = ({books, onShelfChange}) => {
  return (<div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <BooksGrid books={books.filter((book) => book.shelf === "currentlyReading")} onShelfChange={onShelfChange}/>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <BooksGrid books={books.filter((book) => book.shelf === "wantToRead")} onShelfChange={onShelfChange}/>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <BooksGrid books={books.filter((book) => book.shelf === "read")} onShelfChange={onShelfChange}/>
          </div>
        </div>
      </div>
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>);
};

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default ListBooks;
