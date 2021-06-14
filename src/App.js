import React, { useState } from 'react';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Homepage from './components/Homepage';
import IndividualNote from './components/IndividualNote';

function App() {

  return(
    // Routes for homepage and individual note page
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route path="/note/:noteID" component={IndividualNote} />
    </Router>
  )
}

export default App;
