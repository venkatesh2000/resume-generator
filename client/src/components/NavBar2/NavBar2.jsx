import React from "react";
import "./NavBar2.css";
import { Link } from "react-router-dom";

function NavBar2() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="fas fa-tools buildIcon"></i>
        <h4 className="topListItem">RESUME BUILDER</h4>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link
              className="link"
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Home
            </Link>
          </li>
          <li className="topListItem">Getting Started</li>
          <li className="topListItem">Resume Review</li>
          <li className="topListItem">Contact Us</li>
        </ul>
      </div>
      <div className="topRight">
        <ul className="topList">
          <Link
            className="link"
            to="/signup"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <button type="button" className="btn btn-danger topListItem">
              LOGOUT
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default NavBar2;
