import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Router basename="/react-directory">
      <div className="container-fluid"> 
        <Navbar />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
    
  );
}

export default App;
