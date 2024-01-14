import "./App.css";
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";
import {Route, Routes} from "react-router-dom";
import {useState} from "react";

function App() {
  const [books, setBooks] = useState([]);

  return (<div className="app">
    <Routes>
      <Route path="/" element={<ListBooks books={books}/>}/>
      <Route path="/search" element={<SearchBooks books={books}/>}/>
    </Routes>
  </div>);
}

export default App;
