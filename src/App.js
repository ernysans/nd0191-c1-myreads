import "./App.css";
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";
import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import * as BooksAPI from "./BooksAPI";

const App = () => {
  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    const res = await BooksAPI.getAll();
    setBooks(res);
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  const handleShelfChange = (book, shelf) => {
    const updateShelf = async () => {
      await BooksAPI.update(book, shelf);
      // await getAllBooks();
      // Update Books State
      const updatedBooks = books.filter((b) => b.id !== book.id);
      setBooks([
        ...updatedBooks, {
          ...book,
          shelf: shelf,
        },
      ]);
    };
    updateShelf();
  }

  return (<div className="app">
    <Routes>
      <Route path="/" element={<ListBooks books={books} onShelfChange={handleShelfChange}/>}/>
      <Route path="/search" element={<SearchBooks books={books} onShelfChange={handleShelfChange}/>}/>
    </Routes>
  </div>);
};

export default App;
