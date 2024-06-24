import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Blogs from './components/Blogs';

function App() {
  return (
    <div className="App">
       <Router>
          <Nav/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/cv" element={<Contact/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
          </Routes>
       </Router>

    </div>
  );
}

export default App;