import React from 'react';
import { Bell, Envelope } from 'react-bootstrap-icons';
import './dashboard.css'

export default function DashboardHeader() {
  return (
    <>
      <nav class="navbar sticky-top navbar-light bg-dark">
        <div class="container-fluid">
          <div className='bg-dark text-white' style={{width:'20%'}}>
          <h3 className='p-2'>React Practice</h3>
          </div>
          <div className='float-right pr-5'>
          <Envelope  color='#ffffff' /> &nbsp; &nbsp; &nbsp; &nbsp;
          <Bell  color='#ffffff'/>
          </div>
        </div>
      </nav>
    </>
  )
}
