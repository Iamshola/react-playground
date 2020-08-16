import React from 'react'
import axios from 'axios'



class Show extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCountry: {
        currencies: [],
        languages: [], 
        population: 0
      }
      
    }
  }

  componentDidMount() {
    console.log(this.props);
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => this.setState({
        selectedCountry: res.data[this.props.location.countryIndex]
      }))
  }


render() {
  console.log(this.props.pieceOfState)
    return (
      <div className={` container mt-3 ${this.props.pieceOfState ? 'bg-dark' : 'bg-light '}`} >
       <div className="row">
          <div className="col-12 col-lg-6">

            <img src={this.state.selectedCountry.flag} className="rounded float-left" alt={this.state.selectedCountry.name} />
          </div>
          <div className="col-12 col-lg-6 mt-5">

            <div className="row">
              <div className="col-12 col-lg-6 ">

                <h1 className="text-dark h3 mb-5">{this.state.selectedCountry.name} </h1>
                <p className="text-dark header"> Population: <span> {this.state.selectedCountry.population.toLocaleString()} </span> </p>
                <p className="text-dark header"> Native Name: <span> {this.state.selectedCountry.nativeName} </span> </p>
                <p className="text-dark header"> Region: <span> {this.state.selectedCountry.region} </span> </p>
                <p className="text-dark header"> Sub Region: <span> {this.state.selectedCountry.subregion} </span> </p>
                <p className="text-dark header"> Capital: <span> {this.state.selectedCountry.capital} </span> </p>
              </div>

              <div className="col-12 col-lg-6 mt-5">
                <p className="text-dark header"> Top Level Domains: <span> {this.state.selectedCountry.topLevelDomain} </span> </p>
                <p className="text-dark header"> Currency : <span> {this.state.selectedCountry.currencies.map(x => x.name)} </span> </p>
                <p className="text-dark header"> Languages : <span> {this.state.selectedCountry.languages.map(x => x.name).join(', ')} </span> </p>
              </div>

            </div>


          </div>
        </div> 
      </div>

    )
  }
}

export default Show
