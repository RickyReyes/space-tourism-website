import React, { useState } from 'react'
import data from '../data'

export default function Destinations() {
  const destinationsArr = data.destinations

  const [currentDestination, setCurrentDestination] = useState('Moon')

  const destinationObj = destinationsArr.filter(destination => destination.name == currentDestination)[0]

  const destinationsList = destinationsArr.map(des => {
    console.log(des.name);
    console.log("current: " + currentDestination);
    return (
      <li className="destination-li" key={des.name}>
        <input className="des-list-checkbox" 
               id={des.name} 
               type="radio" 
               name="destination"
               defaultChecked={currentDestination == des.name}>
        </input>
        <label htmlFor={des.name} 
               onClick={() => setCurrentDestination(des.name)} className="des-list-label">
                  {des.name}
        </label>
      </li>
  )})

  return (
    <div className="Destinations">
      <h2><span className="number">01</span> Pick your destination</h2>
      <div className={"destination-image " + destinationObj.name} alt="destination image" />
      <ul className="destinations-list">
        {destinationsList}
      </ul>
      <h1 className="destination-name">{destinationObj.name}</h1>
      <p className="destination-description">{destinationObj.description}</p>
      <small>Avg. Distance</small>
      <h3>{destinationObj.distance}</h3>
      <small>Est. Travel Time</small>
      <h3>{destinationObj.travel}</h3>
    </div>
  )
}