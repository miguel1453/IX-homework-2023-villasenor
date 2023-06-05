
import './App.css';

import 'bootstrap/dist/css/bootstrap.css'

import BookForm from './components/BookForm';
import BookTable from './components/BookTable';

import { useState } from 'react';



function App() {
  const [books,setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);

  function onBookCreated(book) {
    setBookToEdit(null);
    setBooks([...books, book]);
    console.log(books);
  }

  function onBookDelete(book) {
    setBooks(books.filter((x) => x.isbn !== book.isbn));
  }

  function onBookEdit(book) {
    setBookToEdit(book);
    setBooks(books.filter((x) => x.isbn !== book.isbn));
  }




  return (
    <div className="text-center m-4">
      <div className="card p-4">
        <BookForm bookToEdit={bookToEdit} onBookCreated={onBookCreated}></BookForm>
        <BookTable books={books}
          onBookDelete={onBookDelete}
          onBookEdit={onBookEdit}
        ></BookTable>
      </div>

    </div>
  );
}

export default App;
