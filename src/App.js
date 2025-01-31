import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LeftSideBar from './components/leftSideBar/leftSideBar';
import "./App.css"
import NavBar from './components/navBar/navBar';

function App() {
  return (
    <div className='body' style={{display:"flex"}}>
      <LeftSideBar/>
      <div>
        {/* <NavBar/> */}
      </div>
    </div>
  );
}

export default App;
