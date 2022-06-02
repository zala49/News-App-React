import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LogOutConfirm from '../Components/logout/LogOutConfirm';
import LogoutDrop from '../Components/logout/LogoutDrop';


function Navbar() {
  const [showLogOut, setshowLogOut] = useState();

  function showLogOutHandler() {
    setshowLogOut(true);
  }

  function closeLogOutHandler() {
    setshowLogOut(false);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark container my-2">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/news">
            News
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active "
                  aria-current="page"
                  to="/news/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link active" to="/news/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <div>
                  <button onClick={showLogOutHandler} className="nav-link btn active">
                    Logout
                  </button>
                </div>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {showLogOut && <LogoutDrop onClick={closeLogOutHandler} />}
      {showLogOut && (
        <LogOutConfirm text="Are you sure?" onClose={closeLogOutHandler} />
      )}
    </>
  );
}
export default Navbar;
