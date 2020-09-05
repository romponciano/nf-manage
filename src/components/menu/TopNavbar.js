import React from 'react';
import { COMPANY_NAME } from '../../Constants';
import './Navbar.css';
import { Link } from 'react-router-dom';

const logo = require('../../assets/logo.png')

const TopNavbar = () => {
  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar bg-dark topbar">
      <Link to='/home' className="text-white navbar-brand">
        <img alt="Cheers" src={logo} width="60px" height="60px" />
        <b>{COMPANY_NAME}</b>
      </Link>
      <form className="form-inline ml-auto">
        <input type="search" placeholder="Buscar" className="form-control mr-sm-2" />
        <Link to='/search-results'>
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
          </svg>
        </Link>
      </form>
    </nav>
  )
}

export default TopNavbar
