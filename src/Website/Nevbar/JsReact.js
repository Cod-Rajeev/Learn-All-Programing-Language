import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function JsReact() {
  return (
     <div>
          <h1 className='text-center text-danger bg-info container'>JsReact Language Intro</h1>

    <hr/>
    <NavLink to="react1" className='text-decoration-none fw-bold btn btn-outline-dark'>What is React ?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <NavLink to="react2" className='text-decoration-none fw-bold btn btn-outline-dark'>How does React Work?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <NavLink to="react3" className='text-decoration-none fw-bold btn btn-outline-dark'>React.JS History ?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <NavLink to="react4" className='text-decoration-none fw-bold btn btn-outline-dark'>Run the React Application ?</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Outlet/>
</div>
  )
}

export default JsReact