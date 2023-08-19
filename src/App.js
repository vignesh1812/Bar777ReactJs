import React from 'react';
import './App.css';
import Home from "./Home"
import Menu from './Menu'
import Table from './Table';
import About from './About';
import Contact from './Contact'
// import { Link, Router } from 'react-router-dom';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="App container-fluid">
      <Navbar/>
        <Routes>
        <Route path='/' Component={Home} />
        <Route path='/menu' Component={Menu} />
        <Route path='/booktable' Component={Table} />
        <Route path='/about' Component={About} />
        <Route path='/contact' Component={Contact} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
