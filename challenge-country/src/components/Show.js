import React from 'react'

const Show = ( { location: { state }  }) => {
console.log(state)
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-12 col-lg-6">

            <img src={state.flag} className="rounded float-left" alt={state.name} />
          </div>
          <div className="col-12 col-lg-6 mt-5">

            <div className="row">
              <div className="col-12 col-lg-6 ">

                <h1 className="text-dark h3 mb-5">{state.name} </h1>
                <p className="text-dark header"> Population: <span> {state.population.toLocaleString()} </span> </p>
                <p className="text-dark header"> Native Name: <span> {state.nativeName} </span> </p>
                <p className="text-dark header"> Region: <span> {state.region} </span> </p>
                <p className="text-dark header"> Sub Region: <span> {state.subregion} </span> </p>
                <p className="text-dark header"> Capital: <span> {state.capital} </span> </p>
              </div>

              <div className="col-12 col-lg-6 mt-5">
                <p className="text-dark header"> Top Level Domains: <span> {state.topLevelDomain} </span> </p>
                <p className="text-dark header"> Currency : <span> {state.currencies.map(x => x.name)} </span> </p>
                <p className="text-dark header"> Languages : <span> {state.languages.map(x => x.name).join(', ')} </span> </p>
              </div>

            </div>


          </div>
        </div>
      </div>

    )
  }

export default Show
