import React from 'react'
import DashboardHeader from './DashboardHeader'
import './dashboard.css';
import {ArrowRightSquareFill } from 'react-bootstrap-icons';


export default function DashBoard() {
  return (
    <>
      <DashboardHeader />
      <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width:'20%',height:"88vh"}}>
      <a href="/" class="d-flex align-items-left mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi me-2" width="30" height="24"></svg>
      <span class="fs-5 fw-semibold text-white">Admin DashBoard</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
         <ArrowRightSquareFill  className='mr-3'/>
          Home
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
         <ArrowRightSquareFill  className='mr-3'/>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
         <ArrowRightSquareFill  className='mr-3'/>
          Orders
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
         <ArrowRightSquareFill  className='mr-3'/>
          Products
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
        <ArrowRightSquareFill  className='mr-3'/>
          Customers
        </a>
      </li>
    </ul>
    <hr />
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
        <strong>Admin Name</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
      </div>
      
    </>
  )
}
