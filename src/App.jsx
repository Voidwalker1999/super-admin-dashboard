import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Content from './Content';
import Masteradmin from './Masteradmin';
import UIComponentes from './UIComponentes';
import Widgets from './Widgets';
import Ecommerce from './Ecommerce';
import System from './System';

function App() {
  return (
    <div className='grid-container'>
      <Navbar />
      <Sidebar />
      {/* <Content /> */}
      {/* <Masteradmin/> */}
      {/* <UIComponentes/> */}
      {/* <Widgets/> */}
      {/* <Ecommerce/> */}
      <System/>
    </div>
  );
}

export default App;
