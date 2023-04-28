import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import Navbar from './components/layout/Navbar';
function App() {
  return (
    <div className="container">
       <Navbar/>
      <HomePage/> 
      <AboutPage/>
      <ContactPage/>
    </div>
  );
}

export default App;

