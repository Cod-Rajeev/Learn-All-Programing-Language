import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Go() {
  return (
    <>
    <div>
    <h1 className='text-center text-danger bg-info container'>Go Language Intro</h1>
      <hr/>
        <NavLink to="go1" className='text-decoration-none fw-bold btn btn-outline-dark'>What is Go?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="go2" className='text-decoration-none fw-bold btn btn-outline-dark'>What is Go Used For?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="go3" className='text-decoration-none fw-bold btn btn-outline-dark'>Why Use Go?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="go4" className='text-decoration-none fw-bold btn btn-outline-dark'>Get Started....</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Outlet/>
    </div>
    </>
  )
}

export default Go