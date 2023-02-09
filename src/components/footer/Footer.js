import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer bg-dark text-white'>
     <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <Link to='/about'  className="nav-link" style={{color:'#fff'}}>About Us</Link>
      <Link to='/careers'  className="nav-link" style={{color:'#fff'}}>Careers</Link>
      <Link to='/productlist'  className="nav-link" style={{color:'#fff'}}>Products</Link>
    </ul>
    <p className="text-center text-muted">© 2019 - 2022 Copyright Web Construction. All Rights Reserved</p>
  </footer>
</div>
    </div>
  )
}
