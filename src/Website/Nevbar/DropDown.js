import React from 'react'
import { NavLink } from 'react-router-dom'

function DropDown() {
  return (
    <div>
        <div className="dropdown text-center">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu me-auto">
    <li><NavLink className="dropdown-item" to="https://www.youtube.com/">You Tube</NavLink></li>
    <li><NavLink className="dropdown-item" to="https://youtu.be/S-Fucuw7NKs?si=IhgLldOBBtOKMbB4">Favorite Song</NavLink></li>
    <li><NavLink className="dropdown-item" to="https://youtu.be/S-Fucuw7NKs?si=IhgLldOBBtOKMbB4">Khana img</NavLink></li>
  </ul>
</div>
    </div>
  )
}

export default DropDown