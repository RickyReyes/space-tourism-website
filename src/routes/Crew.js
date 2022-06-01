import React, { useState } from 'react'
import data from '../data'

export default function Crew() {
  const crewArr = data.crew
  const [currentCrewMember, setCurrentCrewMember] = useState(0)
  const crewMemberObj = crewArr[currentCrewMember]
  const snakeCaseName = crewMemberObj.name.replace(/\s+/g, '-').toLowerCase()

  function handleToggle(idx) {
    setCurrentCrewMember(idx)
  }

  const bullets = crewArr.map((member, idx) => (
  //     <div className="bullet" 
  //          style={{opacity: member.name == crewMemberObj.name ? 1 : .2}}
  //          onClick={() => handleToggle(idx)}
  //          key={idx}>
  //       &#x2022;
  //     </div>

      <li className="crew-bullet" key={member.name}>
        <input onClick={() => handleToggle(idx)}
               className="crew-bullet-checkbox"
               id={member.name}
               type="radio" 
               name="member">
        </input>
        <label className="crew-bullet-label"
               htmlFor={member.name}>
                &#x2022;
        </label>
      </li>
  ))

  return (
    <main className="Crew">
      <h2><span className="number">02</span> Meet your crew</h2>
      <div className="crew-flex">
        <div className={"crew-member-photo " + snakeCaseName}></div>
        <div className="crew-bullets-and-info">
          <ul className="crew-bullets">
            {bullets}
          </ul>
          <div className="crew-member-info">
            <h3 className="crew-member-role">{crewMemberObj.role}</h3>
            <h4 className="crew-member-name">{crewMemberObj.name}</h4>
            <p className="crew-member-bio">{crewMemberObj.bio}</p>
          </div>
        </div>
      </div>
    </main>
  )
}