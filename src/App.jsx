import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Content from './Content';

function App() {
  return (
    <div className='grid-container'>
      <Navbar />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
