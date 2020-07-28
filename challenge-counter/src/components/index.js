
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
    this.resetButton = this.resetButton.bind(this)
  }

  increment(e) {
    this.setState({ [e.target.value]: this.state[e.target.value] + 1 });
  };


  resetButton(){
    this.setState({
      Vegeterian: 0,
      Vegan: 0,
      Halal: 0,
      GlutenFree: 0,
      Anything: 0
    })
  }

  render() {
    console.log(this.state)

    return (
      <div>
        
        <button value="Vegeterian" onClick={this.increment}>Vegeterian </button>
        <button value="Vegan" onClick={this.increment}>Vegan </button>
        <button value="Halal" onClick={this.increment}> Halal </button>
        <button value="GlutenFree" onClick={this.increment}>Gluten - Free </button>
        <button value="Anything" onClick={this.increment}>Anything </button>

        <button value="" onClick={this.resetButton}>Reset </button>
      </div>


    )
  }

}

export default Index