import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Swift() {
  return (
    <>
    <div>
    <h1 className='text-center text-danger bg-info container'>Swift Language Intro</h1>
      <hr/>
        <NavLink to="swift1" className='text-decoration-none fw-bold btn btn-outline-dark'>What is Swift?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="swift2" className='text-decoration-none fw-bold btn btn-outline-dark'>Swift 4 Features</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="swift3" className='text-decoration-none fw-bold btn btn-outline-dark'>Swift Version History ?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="swift4" className='text-decoration-none fw-bold btn btn-outline-dark'>Semicolons in Swift ?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Outlet/>
    </div>
    </>
  )
}

export default Swift