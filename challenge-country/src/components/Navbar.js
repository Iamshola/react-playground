import React from 'react'

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

class Navbar extends React.Component {
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

 

  render() {
    const [current, send] = useMachine(changeTheme)
    return (
      <div>
        {/* <nav class={` navbar navbar-expand-lg navbar-light ${this.state.clickTerm ? 'bg-dark' : 'bg-light '} `}>
          <div class="container d-flex justify-content-between">
            <a className="navbar-brand" href="/">Where in the world?</a>
            <button onClick={this.handleDarkMode}>Dark Mode</button>
          </div>
        </nav> */}
      </div>
    )
  }
}

export default Navbar
