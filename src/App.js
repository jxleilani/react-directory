import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <div className="container-fluid"> 
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
      </div>
    </Router>
    
  );
}

export default App;
