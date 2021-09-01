import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav justify-content-center">
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container-fluid">
          <NavLink className="navbar-brand nav-link active" to="/">
            Home
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item"></li>
              <li class="nav-item">
                <NavLink className="nav-link active" to="/Info">
                  Info
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link active" to="/Jobs">
                  Jobs
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link active" to="/Market">
                  Market
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link active" to="/Brokers">
                  Brokers
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link active" to="/Deaddrops">
                  Deaddrops
                </NavLink>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar
