import React, { useState } from 'react';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Homepage from './components/Homepage';
import NewNote from './components/NewNote';
import List from './components/List';
import Note from './components/Note';

function App() {

  return(
    <Router>
      <Route exact path="/" component={Homepage} />
      {/* <Route path="/person/:personId" component={PersonPage} /> */}
    </Router>
  )
}

export default App;
