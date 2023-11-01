import React from 'react'
import "../style/Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <header className="container main-navbar">
      <nav className="d-flex justify-content-between align-items-center py-4">
        <div className="d-flex gap-5 left-navbar">
          <a href="#">Home </a>
          <a href="#">Add Recipe</a>
          <a href="#">Profile</a>
        </div>
        <div className="d-flex gap-5 align-items-center right-navbar">
          <img src="" alt="" />
          <Link to="/login">
          <p>Login</p>
          </Link>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Navbar