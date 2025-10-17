import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Sql() {
  return (
    <>
     <div>
     <h1 className='text-center text-danger bg-info container'>Sql Language Intro</h1>
      <hr/>
        <NavLink to="sql1" className='text-decoration-none fw-bold btn btn-outline-dark'>What is SQL?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="sql2" className='text-decoration-none fw-bold btn btn-outline-dark'>What Can SQL do?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="sql3" className='text-decoration-none fw-bold btn btn-outline-dark'>SQL is a Standard - BUT....</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="sql4" className='text-decoration-none fw-bold btn btn-outline-dark'>Using SQL in Your Web Site</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Outlet/>
    </div>
    </>
  )
}

export default Sql