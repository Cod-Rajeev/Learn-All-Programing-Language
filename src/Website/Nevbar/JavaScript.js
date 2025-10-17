import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function JavaScript() {
  return (
    <>
    <div>
    <h1 className='text-center text-danger bg-info container'>JavaScript Language Intro</h1>
      <hr/>
        <NavLink to="javascript1" className='text-decoration-none fw-bold btn btn-outline-dark'>What is JavaScript ?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="javascript2" className='text-decoration-none fw-bold btn btn-outline-dark'>JavaScript Can Change HTML Content ?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="javascript3" className='text-decoration-none fw-bold btn btn-outline-dark'>Why Study JavaScript?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="javascript4" className='text-decoration-none fw-bold btn btn-outline-dark'>Commonly Asked Questions--.....</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Outlet/>
    </div>
    </>
  )
}

export default JavaScript