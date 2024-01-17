import PropTypes from "prop-types";

/**
 * Book Component
 * @param book
 * @param onShelfChange
 * @returns {JSX.Element}
 * @constructor
 */
const Book = ({book, onShelfChange}) => {
  const handleChange = (event) => {
    event.preventDefault();
    if (onShelfChange) {
      onShelfChange(book, event.target.value);
    }
  }
  return (<div className="book" data-shelf={book.shelf !== 'none'}>
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=128&height=193&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D'})`,
        }}
      ></div>
      <div className="book-shelf-changer">
        <select onChange={handleChange} value={book.shelf}>
          <option disabled>
            {book.shelf === 'none' && ("Add to...")}
            {book.shelf !== 'none' && ("Move to...")}
          </option>
          <option value="currentlyReading">
            Currently Reading
          </option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">
            {book.shelf !== 'none' && ("Remove")}
            {book.shelf === 'none' && ("None")}
          </option>
        </select>
      </div>
    </div>
    <div className="book-title">{book.title}</div>
    {book.authors && book.authors.length > 0 && (<div className="book-authors">{book.authors.join(', ')}</div>)}
  </div>);
}

Book.propTypes = {
  book: PropTypes.object.isRequired, onShelfChange: PropTypes.func.isRequired,
};
export default Book;
