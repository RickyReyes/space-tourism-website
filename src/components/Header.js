import React from 'react'
import { Link, NavLink } from "react-router-dom"

export default function Header({ setShowMobileMenu }) {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
            <li>
              <NavLink to="/" 
                      onClick={() => setShowMobileMenu(false)}
                      className={({isActive}) => ["nav-link", isActive ? "active" : null]
                      .filter(Boolean)
                      .join(" ")}>
                <span className="nav-number">00 </span>Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/destinations" 
                      onClick={() => setShowMobileMenu(false)}
                      className="nav-link">
                <span className="nav-number">01 </span>Destination
              </NavLink>
            </li>
            <li>
              <NavLink to="/crew" 
                      onClick={() => setShowMobileMenu(false)}
                      className="nav-link">
                <span className="nav-number">02 </span>Crew
              </NavLink>
            </li>
            <li>
              <NavLink to="/technology" 
                      onClick={() => setShowMobileMenu(false)}
                      className="nav-link">
               <span className="nav-number">03 </span>Technology
              </NavLink>
            </li>
          </ul>
        </nav>   
      <Link to="/" onClick={() => setShowMobileMenu(false)}>
        <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
      </Link>
      <svg onClick={() => setShowMobileMenu(true)} className="hamburger" xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
    </header>
  )
}