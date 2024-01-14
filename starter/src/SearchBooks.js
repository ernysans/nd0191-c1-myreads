import BooksGrid from "./BooksGrid";
import {Link} from "react-router-dom";
import {useState} from "react";
import PropTypes from "prop-types";

const SearchBooks = ({books}) => {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [query, setQuery] = useState("");
  return (<div className="search-books">
    <div className="search-books-bar">
      <Link to="/" className="close-search">Close</Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setFilteredBooks(books.filter((book) => book.title.toLowerCase().includes(event.target.value.toLowerCase())));
          }}
        />
      </div>
    </div>
    <div className="search-books-results">
      <BooksGrid books={filteredBooks}/>
    </div>
  </div>);
}

SearchBooks.propTypes = {
  books: PropTypes.array.isRequired,
};
export default SearchBooks;
