import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Content from './Content';
import Masteradmin from './Masteradmin';

function App() {
  return (
    <div className='grid-container'>
      <Navbar />
      <Sidebar />
      <Content />
      <Masteradmin/>
    </div>
  );
}

export default App;
