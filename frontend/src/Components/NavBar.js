import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="display-6 text-center">
        <div className="nav">        
            <h1 className='nav'>
                <NavLink className="nav-link active" to="/"><i className="fas fa-home"></i></NavLink>
                <NavLink className="nav-link" to="/Jobs"><i className="fas fa-briefcase"></i></NavLink>
            </h1>
        </div>
    </div>
  );
};

export default NavBar
