import {
    collection,
    addDoc,
    query,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
} from 'firebase/firestore';


import { db } from '../firebase/firebase';
import { Book } from '../models/Book';

class BookService {
    constructor() {
        this.collection = 'books';
    }

    async fetchBooks() {
        const collectionRef = collection(db, this.collection);
        const q = query(collectionRef);
        const snapShot = await getDocs(q);
       
        const books = [];
         snapShot.forEach((doc) => {
            const data = doc.data();
            const book = new Book(data.title, data.author, data.isbn, doc.id);
            books.push(book);
         });

         return books;
    }

    async createBook(book) {
        const collectionRef = collection(db, this.collection);
        await addDoc(collectionRef, {
            name: book.title,
            author: book.author,
            isbn: book.isbn,
        });

    }

    async deleteBook(id) {
        const docRef = doc(db, this.collection, id);
        await deleteDoc(docRef);
    }
}

const service = new BookService();
export default service;