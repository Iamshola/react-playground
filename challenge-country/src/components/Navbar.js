import React from 'react'


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
