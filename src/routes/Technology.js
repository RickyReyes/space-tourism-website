import React, {useState} from 'react'
import data from '../data'

export default function Technology() {
  const technologyArr = data.technology
  const [currentTech, setCurrentTech] = useState(0)
  const techObj = technologyArr[currentTech]
  let snakeCaseName = techObj.name.replace(/\s+/g, '-').toLowerCase()

  const buttons = technologyArr.map((tech, idx) => (
    <button 
      className="tech-toggle-button"
      key={idx}
      style={{
        backgroundColor: idx == currentTech ? 'white' : 'transparent',
        color:  idx == currentTech ? 'black' : 'white'}}
      onClick={() => setCurrentTech(idx)}
    >
      {idx + 1}
    </button>
  ))

  return (
    <main className="Technology">
      <h2><span className="number">03</span> Space launch 101</h2>
      <div className="tech-flex">
        <div className={"tech-image " + snakeCaseName + "-photo"}>
        </div>
        <div className="tech-buttons-and-info">
          <div className="tech-toggle-buttons">
            {buttons}
          </div>
          <div className="tech-info">
            <small>The terminology...</small>
            <h4 className="tech-name">{techObj.name}</h4>
            <p className="tech-description">
              {techObj.description}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}