import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <div className="container-fluid"> 
        <Navbar />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
    
  );
}

export default App;
