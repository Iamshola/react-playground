import React from 'react'


const Card = ({ flag, name, population, region, capital}) => {
  return (
    <div className="card h-100">
      <div className="card-image">
        <figure className="image">
          <img className="img-fluid" src={flag} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <h1 className="text-dark h5">{name} </h1>
        <p className="text-dark header"> Population: <span> {population.toLocaleString()} </span> </p>
        <p className="text-dark header"> Region: <span> {region} </span></p>
        <p className="text-dark header"> Capital: <span> {capital} </span> </p>
    </div>

    </div>

  )
} 

export default Card
