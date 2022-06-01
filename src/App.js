import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import Header from "./components/Header"
import MobileMenu from "./components/MobileMenu"

export default function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const path = useLocation().pathname
  const location = path.substring(1);
  return (
    <div className={"App " + location}>
      {showMobileMenu && <MobileMenu setShowMobileMenu={setShowMobileMenu}/>}
      <Header setShowMobileMenu={setShowMobileMenu} />
      <Outlet />
    </div>
  )
}