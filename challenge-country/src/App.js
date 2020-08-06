import React from 'react';
import './App.css';
import Index from './components/index.js'
import Navbar from './components/Navbar.js'
import ShowCountries from './components/Show.js'
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Route path="/country/:id" component={ShowCountries} />
        <Route exact path="/" component={Index} />
      </HashRouter>
    </div>
  );
}

export default App;
