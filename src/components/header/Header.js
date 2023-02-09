import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <Link to="/" className='navbar-brand'>React Practice</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink to="/home" className='nav-link'>Home</NavLink>
        <NavLink to="/about" className='nav-link'>About</NavLink>
        <NavLink to="/careers" className='nav-link'>Careers</NavLink>
        <NavLink to="/productlist" className='nav-link'>Product List</NavLink>
        <NavLink to="/editdeletecontactdata" className='nav-link'>Conatct</NavLink>
        <NavLink to="/adminlogin" className='nav-link'>Login</NavLink>
        {/* <NavLink to="/dashboard" className='nav-link'>Dashboard</NavLink> */}
      </div>
    </div>
  </div>
</nav>
    </>
  )
}
