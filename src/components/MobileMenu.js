import React from 'react'
import { Link } from 'react-router-dom'

export default function MobileMenu({setShowMobileMenu}) {
  return (
        <div className="mobile-menu">
          <svg className="close-icon" onClick={() => setShowMobileMenu(false)} xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>
          <ul>
            <li>
              <Link to="/" onClick={() => setShowMobileMenu(false)}>
                <span className="number">00</span> Home
              </Link>
            </li>
            <li>
              <Link to="/destinations" onClick={() => setShowMobileMenu(false)}>
                <span className="number">01</span> Destination
              </Link>
            </li>
            <li>
              <Link to="/crew" onClick={() => setShowMobileMenu(false)}>
                <span className="number">02</span> Crew
              </Link>
            </li>
            <li>
              <Link to="/technology" onClick={() => setShowMobileMenu(false)}>
                <span className="number">03</span> Technology
              </Link>
            </li>
          </ul>
        </div>
  )
}