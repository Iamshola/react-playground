
import React from 'react'


class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Vegeterian: 0,
      Vegan: 0,
      Halal: 0,
      GlutenFree: 0,
      Anything: 0
    }
    this.increment = this.increment.bind(this)
  }

  increment(e) {
    this.setState({ [e.target.value]: this.state[e.target.value] + 1 });
  };

  render() {

    return (
      <div>
        
        <button value="Vegeterian" onClick={this.increment}>Vegeterian </button>
        <button value="Vegan" onClick={this.increment}>Vegan </button>
        <button value="Halal" onClick={this.increment}> Halal </button>
        <button value="GlutenFree" onClick={this.increment}>Gluten - Free </button>
        <button value="Anything" onClick={this.increment}>Anything </button>

      </div>


    )
  }

}

export default Index