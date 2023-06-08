import './App.css';

import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { auth } from './firebase/firebase';

// Page Imports
import BookPage from './components/books/BookPage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import Navbar from './components/common/Navbar';
import ProfilePage from './components/common/ProfilePage'



function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log(user);
    })
  }, []);

  return (
  <BrowserRouter>
    <Navbar user={user}/>
    <Routes>
      <Route path='/' element={<BookPage/>}></Route>
      <Route path='/register' element={<RegisterPage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/profile' element={<ProfilePage user={user}></ProfilePage>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
