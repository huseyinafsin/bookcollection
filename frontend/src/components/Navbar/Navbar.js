import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { faBook, faCode, faMoneyCheck, faPerson, faUser, faUserAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Social from '../Social/Social';
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" >
  <div className="container-fluid">
    <Link className="navbar-brand fw-bold" to={'/'}><FontAwesomeIcon icon={faBook}/>Book-Collection</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/books'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/books'} >Books</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'about'} >About</Link>
        </li>
        <Link className="nav-link" to={'https://github.com/huseyinafsin/bookcollection/'}> <i className="bi bi-git"></i> Source Code</Link>
        <Link className="nav-link" to={'https://huseyins-organization.gitbook.io/book-collection'}> <i className="bi bi-file-earmark-text"></i> Doc</Link>
      </ul>
      <Social/>
    </div>
  </div>
</nav>


  );
}