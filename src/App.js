import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import PageNotFound from './components/pages/PageNotFound';
function App() {
  return (
   <Router>
     <div>
       <Navbar/>
        <Routes>
          <Route exact path="/home" element={<HomePage/>}/>
          <Route exact path="/about" element={<AboutPage/>}/>
          <Route exact path="/contact" element={<ContactPage/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
     </div>
    </Router>
  );
}

export default App;

