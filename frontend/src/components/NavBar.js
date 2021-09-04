import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="display-6">
      <nav className="nav-brand">
        <div className="nav-item">        
            <h1>
                <NavLink className="nav-link active" to="/"><i className="fas fa-home"></i></NavLink>
                <NavLink className="nav-link" to="/Intel"><i className="far fa-newspaper"></i></NavLink>
                <NavLink className="nav-link" to="/Jobs"><i className="fas fa-briefcase"></i></NavLink>
            </h1>
        </div>
      </nav>
    </div>
  );
};

export default NavBar
