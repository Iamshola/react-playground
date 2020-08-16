import React from 'react';
import './App.css';
import Index from './components/index.js'
import Navbar from './components/Navbar.js'
import ShowCountries from './components/Show.js'
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter, Route } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allData: [],
      clickTerm: false
    }
    this.handleDarkMode = this.handleDarkMode.bind(this)
  }

  handleDarkMode(e) {
    this.setState({ clickTerm: !this.state.clickTerm })
  }


  render () {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <nav class={` navbar navbar-expand-lg navbar-light ${this.state.clickTerm ? 'bg-dark' : 'bg-light '} `}>
              <div class="container d-flex justify-content-between">
                <a className="navbar-brand" href="/">Where in the world?</a>
                <button onClick={this.handleDarkMode}>Dark Mode</button>
              </div>
            </nav>
          </div>
          <Route path="/country/:id"   
            render={props =>
              (<ShowCountries {...props} pieceOfState={this.state.clickTerm} />)
            }
            
            />
          <Route exact path="/" component={Index} />
        </HashRouter>
      </div>
    );
  }
}

export default App;
