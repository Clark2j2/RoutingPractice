import React from 'react';
import './App.css';

import { Router } from '@reach/router';
import Number from './components/Number';
import Home from './components/home';
import Hello from './components/hello';
import Colors from './components/colors';

function App() {
  return (
    <div className="App">
      <Router>
      <Home path="/home"/>  
      <Number path="/4"/>
      <Hello path="/hello"/>
      <Colors path="/hello/blue/red"/>
      </Router>
    </div>
  );
}

export default App;
