import React from 'react'
import {Link} from "react-router-dom"

export default function Header({ setShowMobileMenu }) {
  return (
    <header className="header">
      <Link to="/" onClick={() => setShowMobileMenu(false)}>
        <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
      </Link>
      <svg onClick={() => setShowMobileMenu(true)} className="hamburger" xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
    </header>
  )
}
