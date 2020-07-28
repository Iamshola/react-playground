import React from 'react'


class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allData: [],
      searchTerm: '',
      favs: [],
      clickTerm: ''
    }
    this.orderName = this.orderName.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.favourites = this.favourites.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    const myHeaders = new Headers({
      "Content-Type": "application/json",
      Accept: "application/json"
    });

    fetch("babyNames.json", {
      headers: myHeaders,

    })

      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ allData: data })
      })

  }

  orderName() {
    const re = new RegExp(this.state.searchTerm, 'i')
    const word = new RegExp(this.state.clickTerm, 'i')

    const filtered = this.state.allData.filter(child => {
      return re.test(child.name) && word.test(child.sex)
    })

    return filtered.sort((a, b) => a.name.localeCompare(b.name));

  }

  handleKeyUp(e) {
    this.setState({ searchTerm: e.target.value })
  }

  handleClick(e) {
    console.log('click')
    this.setState({ clickTerm: e.target.value })
  }

  favourites(e) {
    var names = []

    if(this.state.favs.includes(e.target.value)) {
      this.setState({ favs: this.state.favs.filter(u => u != e.target.value) })
    } else {
      names.push(e.target.value, ...this.state.favs)     
      this.setState({ favs: names })
    }
  }

  render() {

    return (
      <div>

        <input placeholder='Enter text here' onKeyUp={this.handleKeyUp} />

        <button onClick={this.handleClick} value="f">Girl</button>
        <button onClick={this.handleClick} value="m">Boy</button>
        <button onClick={this.handleClick} value="">remove filter</button>

        <div>
          favourites : {this.state.favs.map((x, i) =>
          <div key={i} >
            <button class="gold" onClick={this.favourites} value={x}> {x}</button>
          </div>
        )}

        </div>

        <section className="hero is-warning is-medium">
          {this.orderName().map((x, i) =>
            <div key={i}>
              <button className={x.sex} onClick={this.favourites} value={x.name}> {x.name}</button>
            </div>
          )}
        </section>
      </div>


    )
  }

}

export default Index