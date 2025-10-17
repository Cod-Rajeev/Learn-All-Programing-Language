import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Html() {
  return (
    <>
    <div>
      <h1 className='text-center text-danger bg-info container'>HTML Language Intro</h1>
      <hr/>
        <NavLink to="html1" className='text-decoration-none fw-bold btn btn-outline-dark'>What is HTML ?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="html2" className='text-decoration-none fw-bold btn btn-outline-dark'>What is an HTML Element?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="html3" className='text-decoration-none fw-bold btn btn-outline-dark'>HTML History ?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="html4" className='text-decoration-none fw-bold btn btn-outline-dark'>HTML Documents ?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Outlet/>
        
    </div>

    </>

  )
}

export default Html