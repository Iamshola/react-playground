import React from 'react'


class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allData: []
    }
    this.handleClick = this.handleClick.bind(this)
  }


  handleClick(e) {
    this.setState({ clickTerm: e.target.value })
  }
  
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container d-flec justify-content-between">
            <a className="navbar-brand" href="/">Where in the world?</a>
            <button>Dark Mode</button>
          </div>
        </nav>




        </div>


    )
  }


}

export default Navbar
