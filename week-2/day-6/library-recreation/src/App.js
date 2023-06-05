
import './App.css';
import BookForm from './components/BookForm';
import BookTable from './components/BookTable';

import 'bootstrap/dist/css/bootstrap.css'

import { useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);

  function onBookCreated(book) {
      setBooks([...books, book]);
      console.log(book);
  }

  function onBookDelete(book) {
    setBooks(books.filter((x) => x.isbn !== book.isbn));
  }

  function onBookEdit(book) {
    setBookToEdit(book);
    setBooks(books.filter((x) => x.isbn !== book.isbn));
    
  }
  
 

  return (
    <div className='m-5'>
      <div className='card p-5'>
      <BookForm onBookCreated={onBookCreated} bookToEdit={bookToEdit}> </BookForm>
      <BookTable books={books} onBookDelete={onBookDelete} onBookEdit={onBookEdit}></BookTable>
      </div>
    </div>
  );
}

export default App;
