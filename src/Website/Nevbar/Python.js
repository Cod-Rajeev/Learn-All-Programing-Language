import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Python() {
  return (
    <>
    <div>
    <h1 className='text-center text-danger bg-info container'>Python Language Intro</h1>
      <hr/>
        <NavLink to="python1" className='text-decoration-none fw-bold btn btn-outline-dark'>What is Python?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="python2" className='text-decoration-none fw-bold btn btn-outline-dark'>What can Python do?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="python3" className='text-decoration-none fw-bold btn btn-outline-dark'>Why Python?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="python4" className='text-decoration-none fw-bold btn btn-outline-dark'>Good to know</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Outlet/>
    </div>
    </>
  )
}

export default Python