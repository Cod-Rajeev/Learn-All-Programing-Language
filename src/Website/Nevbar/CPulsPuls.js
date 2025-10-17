import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function CPulsPuls() {
  return (
    <>
    <div>
    <h1 className='text-center text-danger bg-info container'>C++ Language Intro</h1>

      <hr/>
        <NavLink to="c++1"  className='text-decoration-none fw-bold btn btn-outline-dark'>What is C++?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="c++2"  className='text-decoration-none fw-bold btn btn-outline-dark'>Why Use C++ ?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="c++3"  className='text-decoration-none fw-bold btn btn-outline-dark'>Difference between C and C++ ?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="c++4"  className='text-decoration-none fw-bold btn btn-outline-dark'>Get Started....</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Outlet/>
    </div>
    </>
  )
}

export default CPulsPuls