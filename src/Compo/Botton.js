import React from 'react'
import { NavLink, Outlet, Route, Routes } from 'react-router-dom'
import Data from './Data'

function Botton() {
  return (
    <>
    <div>
        <NavLink className='btn btn-dark' to="/data">Botton</NavLink>
    </div>


    <Routes>
        <Route path='/data' element={<Data/>}></Route>
    </Routes>
    <Outlet/>
    </>
  )
}

export default Botton