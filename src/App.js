import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import Header from "./components/Header"
import MobileMenu from "./components/MobileMenu"

export default function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  
  const path = useLocation().pathname
  const location = path.split("/")[1];

  return (
    <div className={"App " + location}>
      {showMobileMenu && 
        <MobileMenu setShowMobileMenu={setShowMobileMenu}/>}

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