import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserForm from './pages/UserForm';
import UserList from './pages/UserList';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className='bg-light text-dark'>
      <Navbar />
      <div className='container pt-4'>
        <Routes>
          <Route path='/' element={<UserForm />} />
          <Route path='/list' element={<UserList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
