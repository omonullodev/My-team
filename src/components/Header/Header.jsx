import React from 'react'
import logo from '../../assets/img/logo.svg'
import './Header.scss'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
     <div className="container">
     <header>
      <div className="navbar">
      <div className="navbar__logo">
       <a href="#">
       <img src={logo} alt="" />
       </a>
        </div>
        <div className="navbar__left">
      
        
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        </div>
      <div className="navbar__right">
        <li>
          <Link to="contact">Contact</Link>
        </li>
             </div>
      </div>
     </header>
     </div>
    </div>
  )
}

export default Header
