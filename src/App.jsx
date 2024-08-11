import React from 'react';
import Header from './components/Header.jsx';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Contact />
    </div>
  );
};

export default App;
