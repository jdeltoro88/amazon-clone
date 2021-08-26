import React from " react ";
import './App.css';
import Header from "./Header.js";
import Home from './Home.js';
import { BrowserRouter as Router, Switch, Route }
from "react-router-dom";



function App() {
  return (
    <div className="App">
      
      <Header />
      <Home/>
     
    </div>
  );
}

export default App;
