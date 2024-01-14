import BooksGrid from "./BooksGrid";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const ListBooks = () => {
  return (<div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <BooksGrid/>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <BooksGrid/>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <BooksGrid/>
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
};

export default ListBooks;
