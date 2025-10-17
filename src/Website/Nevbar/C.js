import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function C() {
  return (
    <>
    <div>
    <h1 className='text-center text-danger bg-info container'>C Language Intro</h1>

      <hr/>
        <NavLink to="c1" className='text-decoration-none fw-bold btn btn-outline-dark'>What is C?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="c2" className='text-decoration-none fw-bold btn btn-outline-dark'>Why Learn C?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="c3" className='text-decoration-none fw-bold btn btn-outline-dark'>Difference between C and C++ ?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="c4" className='text-decoration-none fw-bold btn btn-outline-dark'>Get Started</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Outlet/>
    </div>
    </>
  )
}

export default C