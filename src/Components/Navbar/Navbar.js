import { Link } from "react-router-dom"
import "./Navbar.css"

 import React from 'react'
  
  function Navbar() {
    return (
     <>
     <div className="Nav">
      <span className="menu">Restaurent👩‍🍳</span>
      <Link to="/" className="nav-menu">Home</Link>
      <Link to="/about" className="nav-menu">About</Link>
      <Link to="/contact" className="nav-menu">Contact</Link>
      </div>

     </>
    )
  }
  
  export default Navbar