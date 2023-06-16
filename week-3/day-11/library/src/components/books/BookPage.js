import React from 'react'
import { useState } from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';

import BookForm from './BookForm';
import BookTable from './BookTable';
import service from '../../service/book-service';
import { useEffect } from 'react';

export default function BookPage() {
  // Declare a new State variable
  // React hook used managing component state
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);

  useEffect(() => {
    onInitialLoad();
  }, []);

   async function onInitialLoad() {
    try {
      const books = await service.fetchBooks();
      setBooks(books);
    } catch (error) {
      console.log(error);
    }
  }

  function onBookCreated(book) {
    setBookToEdit(null);
    setBooks([...books, book]);
    service.createBook(book);
  }

  function onBookDelete(book) {
    setBooks(books.filter((x) => x.isbn !== book.isbn));
    service.deleteBook(book.id);
  }

  function onBookEdit(book) {
    setBookToEdit(book);
    setBooks(books.filter((x) => x.isbn !== book.isbn));
  }

  return (
    <div className="text-center m-5">
      <div className="card p-4">
        <BookForm
          bookToEdit={bookToEdit}
          onBookCreated={onBookCreated}
        ></BookForm>
        <BookTable
          books={books}
          onBookEdit={onBookEdit}
          onBookDelete={onBookDelete}
        ></BookTable>
      </div>
    </div>
  );
}
