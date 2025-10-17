import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { NavLink, Route, Routes } from 'react-router-dom';
import PageOne from './PageOne';
import PageTwo from './PageTwo';


function Profile() {
  return (
    <>
    <div className='container'>
    <div className='row'>
        <div className='col-12 bg-info py-5'>
        <NavLink to="./html" className="text-white py-2">HTML</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="./css" className="text-white py-2">CSS</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="./javascript" className="text-white py-2">JavaScript</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="./react" className="text-white py-2">React</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    </div>
     <div className='row'>
        <div className=' col-3'>
            <h1>Photo</h1>
        </div>
       
        <div className='col-9 bg-danger '>
            {/* <h1 className='bg-light text-center fw-bold'>Welcome To Programming</h1> */}
            
            <Routes>
                <Route path='/' element={<h1 className='bg-info'>Profile</h1>}/>
                <Route path='/html' element={<PageOne/>}>
                    <Route path='html1' element={<h1>HTML 1</h1>}></Route>
                    <Route path='html2' element={<h1>HTML 2</h1>}></Route>
                    <Route path='html3' element={<h1>HTML 3</h1>}></Route>
                    <Route path='html4' element={<h1>HTML 4</h1>}></Route>
                </Route>

                <Route path='/css' element={<PageTwo/>}>
                    <Route path='css1' element={<h1>CSS 1</h1>}></Route>
                    <Route path='css2' element={<h1>CSS 2</h1>}></Route>
                    <Route path='css3' element={<h1>CSS 3</h1>}></Route>
                    <Route path='css4' element={<h1>CSS 4</h1>}></Route>

                </Route>
                <Route path='/javascript' element={<h1>Welcome To JavaScript</h1>}></Route>
                <Route path='/react' element={<h1>Welcome To React</h1>}></Route>
            </Routes>


        </div>
     </div>
 </div>



 </>
  )
}

export default Profile