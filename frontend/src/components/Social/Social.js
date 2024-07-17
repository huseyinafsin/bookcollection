import React from 'react'
import { Link } from 'react-router-dom'
import './Social.css'
export default function Social() {
  return (
    <div>
        <ul className="navbar-nav sm-icons">
        <li><Link className="nav-link" to={'https://www.linkedin.com/in/huseyinafsin/'}><i className="bi bi-linkedin"></i></Link></li>
        <li><Link className="nav-link" to={'https://github.com/huseyinafsin/'}><i className="bi bi-github"></i></Link></li>
        <li><Link className="nav-link" to={'https://www.instagram.com/huseyin.afsinn/'}><i className="bi bi-instagram"></i></Link></li>
        <li><Link className="nav-link" to={'https://huseyinafsin.github.io/'}><i className="bi bi-globe-central-south-asia"></i></Link></li>
      </ul>
    </div>
  )
}

  