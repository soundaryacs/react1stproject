import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '../header/Header'

export default function Careers() {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='row'>
          <h1>Careers</h1>
        </div>
        <div className='row'>
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <button><Link to="/careers/fulltime" class="nav-link active">FullTime Jobs</Link></button>

            </li>
            <li class="nav-item ml-2">
              <button><Link to="/careers/partTime" class="nav-link">PartTine Jobs</Link></button>

            </li>

          </ul>
        </div>

      </div>
      <Outlet />
  
     

    <Footer />
    </div >
  )
}
