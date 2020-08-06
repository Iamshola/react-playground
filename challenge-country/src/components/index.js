import React from 'react'
import axios from 'axios'
import Card from './Card'
import Show from './Show'
import { Link } from 'react-router-dom'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allData: [],
      region: [],
      searchTerm: '',
      navbarOpen: false
    }
    this.orderCountries = this.orderCountries.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => this.setState({ 
        allData: res.data, 
        region: [...new Set(res.data.map(x => x.region))] 
      }))
  }

  orderCountries() {
    const re = new RegExp(this.state.searchTerm, 'i')
    const word = new RegExp(this.state.clickTerm, 'i')

    const filtered = this.state.allData.filter(country => {
      return re.test(country.name) && word.test(country.region)
    })

    return filtered.sort((a, b) => a.name.localeCompare(b.name));

  }

  handleKeyUp(e) {
    this.setState({ searchTerm: e.target.value })
  }

  handleClick(e) {
    this.setState({ clickTerm: e.target.value })
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen })

  }

  handleSubmit() {
    // this.props.history.push('/country/' + this.state.allData)

  }



  render() {

    return (
        <div className="container mt-4">

        <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between mb-3">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"  onKeyUp={this.handleKeyUp}/>
          <div class={`dropdown col-2 ${this.state.navbarOpen ? 'show' : ''} ` }>
            <button 
              class="btn btn-secondary dropdown-toggle" 
              type="button" 
              id="dropdownMenuButton" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false"
              onClick={this.toggleNavbar}
              
              >
              Filter By Region
             </button>
            <div class={`dropdown-menu ${this.state.navbarOpen ? 'show' : ''} `} aria-labelledby="dropdownMenuButton">
              {this.state.region.map((country, i) =>
                <button class="dropdown-item" key={i} value={country} onClick={this.handleClick}> {country}</button>
              )}

            </div>
          </div>
        </nav>
      
          <div className="row">

          {this.orderCountries().map((country, i) =>
              <div key={i} className="col-12 col-md-4 col-lg-3 mb-2">
              <Link 
                to={{
                  pathname: `/country/${country.alpha3Code}`, 
                  state: this.state.allData[i] 
                }}
                
              >
             
                <Card
                  flag={country.flag}
                  name={country.name}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}

                />
                </Link>

              </div>
            )}

          </div>

        </div>



    )
  }

}

export default Index
