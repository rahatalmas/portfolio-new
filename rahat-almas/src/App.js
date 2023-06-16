import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Blogs from './components/Blogs';

function App() {
  return (
    <div className="App">
       <Nav/>
       <Home/>
       <About/>
       <Contact/>
       <Portfolio/>
       <Blogs/>
    </div>
  );
}

export default App;