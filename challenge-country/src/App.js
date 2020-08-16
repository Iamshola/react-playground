import React from 'react';
import './App.css';
import Index from './components/index.js'
import Navbar from './components/Navbar.js'
import ShowCountries from './components/Show.js'
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter, Route } from 'react-router-dom'
import { Machine } from "xstate"
import { useMachine } from "@xstate/react"

const changeTheme = Machine({
  id: "theme",
  initial: "dark",
  states: {
    dark: {
      on: { CHANGE: "light" },
    },
    light: {
      on: { CHANGE: "dark" },
    },
  },
})

function App() {
  const [current, send] = useMachine(changeTheme)

    console.log(current)
    return (
      <div className="App">
        <HashRouter>
          <div>
            <nav class={` navbar navbar-expand-lg navbar-light ${current.matches("dark") ? 'bg-light' : 'bg-dark'} `}>
              <div class="container d-flex justify-content-between">
                <a className="navbar-brand" href="/">Where in the world?</a>
                <button onClick={() => send("CHANGE")}>Change Theme</button>
              </div>
            </nav>
          </div>
          <Route path="/country/:id"   
            render={props =>
              (<ShowCountries {...props} pieceOfState={current} />)
            }
            
            />
          <Route exact path="/" component={Index} />
        </HashRouter>
      </div>
    );
  }


export default App;
