import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Java() {
  return (
    <>
    <div>
    <h1 className='text-center text-danger bg-info container'>Java Language Intro</h1>
      <hr/>
        <NavLink to="java1" className='text-decoration-none fw-bold btn btn-outline-dark'>What is Java?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="java2" className='text-decoration-none fw-bold btn btn-outline-dark'>Why Use Java?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="java3" className='text-decoration-none fw-bold btn btn-outline-dark'>Java Class Attributes ?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="java4" className='text-decoration-none fw-bold btn btn-outline-dark'>Java Constructors ?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Outlet/>
    </div>
    </>
  )
}

export default Java