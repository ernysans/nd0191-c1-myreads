import Book from "./Book";
import PropTypes from "prop-types";

/**
 * Books Grid Component
 * @param books
 * @param onShelfChange
 * @returns {JSX.Element}
 * @constructor
 */
const BooksGrid = ({books, onShelfChange}) => {
  return (<ol className="books-grid">
    {books.map((book) => (
      <li key={book.id}>
        <Book book={book} onShelfChange={onShelfChange}/>
      </li>
    ))}
  </ol>);
}

BooksGrid.propTypes = {
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};
export default BooksGrid;
