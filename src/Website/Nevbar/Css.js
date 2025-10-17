import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Css() {
  return (
    <>
     <div>
     <h1 className='text-center text-danger bg-info container'>CSS Language Intro</h1>
      <hr/>
        <NavLink to="css1" className='text-decoration-none fw-bold btn btn-outline-dark'>What is CSS?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="css2" className='text-decoration-none fw-bold btn btn-outline-dark'>Why Use CSS?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="css3" className='text-decoration-none fw-bold btn btn-outline-dark'>Three Ways to Insert CSS ?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="css4" className='text-decoration-none fw-bold btn btn-outline-dark'>CSS Color Values ?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Outlet/>
    </div></>
  )
}

export default Css