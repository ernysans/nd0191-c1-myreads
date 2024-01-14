import BooksGrid from "./BooksGrid";
import {Link} from "react-router-dom";
import {useState} from "react";
import PropTypes from "prop-types";
import * as BooksAPI from "./BooksAPI";

/**
 * Search Books Component
 * @param books
 * @param onShelfChange
 * @returns {JSX.Element}
 * @constructor
 */
const SearchBooks = ({books, onShelfChange}) => {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  /**
   * Perform Search
   * @param value
   * @returns {Promise<void>}
   */
  const onSearch = async (value) => {
    setQuery(value);
    let res = await BooksAPI.search(value.toLowerCase(), 10);
    if (res && res.length > 0) {
      setSearchResults(res);
    } else {
      setSearchResults([]);
    }
  };

  /**
   * Add Shelf to Search Results
   */
  const resultsWithShelf = searchResults.map((book) => {
    const findBookInLibrary = books.find((b) => b.id === book.id);
    if (findBookInLibrary) {
      book.shelf = findBookInLibrary.shelf;
    } else {
      book.shelf = "none";
    }
    return book;
  });

  return (<div className="search-books">
    <div className="search-books-bar">
      <Link to="/" className="close-search">Close</Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          value={query}
          onChange={(event) => {
            event.preventDefault();
            onSearch(event.target.value);
          }}
        />
      </div>
    </div>
    <div className="search-books-results">
      <BooksGrid books={resultsWithShelf} onShelfChange={onShelfChange}/>
    </div>
  </div>);
}

SearchBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};
export default SearchBooks;
