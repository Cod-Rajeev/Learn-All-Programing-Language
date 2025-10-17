import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function PageTwo() {
  return (
    <div>
        <h1 className='text-center'>CSS intro</h1>
        <hr/>
        <NavLink to="css1">CSS 1</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="css2">CSS 2</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="css3">CSS 3</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="css4">CSS 4</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Outlet/>
    </div>
  )
}

export default PageTwo