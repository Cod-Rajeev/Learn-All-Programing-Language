import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Php() {
  return (
    <>
    <div>
    <h1 className='text-center text-danger bg-info container'>PHP Language Intro</h1>
      <hr/>
        <NavLink to="php1" className='text-decoration-none fw-bold btn btn-outline-dark'>What is PHP?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="php2" className='text-decoration-none fw-bold btn btn-outline-dark'>What You Should Already Know ?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="php3" className='text-decoration-none fw-bold btn btn-outline-dark'>What is a PHP File?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="php4" className='text-decoration-none fw-bold btn btn-outline-dark'>What Can PHP Do?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Outlet/>
    </div>
    </>
  )
}

export default Php