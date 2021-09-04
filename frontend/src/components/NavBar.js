import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav justify-content-start display-6">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <NavLink className="navbar nav-link active" to="/">
          <i class="fas fa-home"></i>
          </NavLink>
          <div class="nav">
            <ul class="navbar-nav ">
              <li class="nav-item"></li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/Info">
                <i class="far fa-newspaper"></i>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/Jobs">
                <i class="fas fa-briefcase"></i>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/Market">
                <i class="fas fa-shopping-bag"></i>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/Brokers">
                <i class="fas fa-user-tie"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar
