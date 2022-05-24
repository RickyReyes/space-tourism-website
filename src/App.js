import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import Header from "./components/Header"

export default function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  
  const path = useLocation().pathname
  const location = path.split("/")[1];

  return (
    <div className={"App " + location}>
      {showMobileMenu && 
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
        </div>}

      <Header className="App" setShowMobileMenu={setShowMobileMenu} />
      <Outlet />
    </div>
  )
}

/* problems and solutions

1. properly nesting routes to keep header
- render header in <App /> instead of <Home />

2. dynamic background image
- const path = useLocation().pathname
  const location = path.split("/")[1];
  <div className={"App " + location}></div>
  in CSS:
    ex) .App.destinations

3. backgrop-filter not supported on firefox
  @supports (backdrop-filter: blur(81.5485px)) {
    background: rgba(255, 255, 255, 0.04);
    -webkit-backdrop-filter: blur(2em);
    backdrop-filter: blur(2em);
  }
  @supports not (backdrop-filter: blur(81.5485px)) {
    background-color: rgba(0, 0, 0, .9);
  }

4. changing destination image
  - add destination name to the div's classname
  - .destination-image.Moon {

  }

*/