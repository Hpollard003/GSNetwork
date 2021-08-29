import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav justify-content-center">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link active" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/Info">Info</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/Jobs">Jobs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/Market">Market</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/Brokers">Brokers</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar