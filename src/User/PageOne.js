import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function PageOne() {
  return (
    <div>
      <h1 className='text-center'>PageOne</h1>
        <hr/>
        <NavLink to="html1">HTML One</NavLink>
        <NavLink to="html2">HTML Two</NavLink>
        <NavLink to="html3">HTML Three</NavLink>
        <NavLink to="html4">HTML Four</NavLink>
        <Outlet/>
    </div>
    

  )
}

export default PageOne