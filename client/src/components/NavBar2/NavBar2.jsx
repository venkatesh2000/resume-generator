import React from "react";
import "./NavBar2.css";
import { Link } from "react-router-dom";
import axios from "axios";

const handleClick = () => {
  let pathName = window.location.pathname;
  pathName = pathName.split("/")[2];
  axios
    .post("http://localhost:5000/information/deleteAccount", {
      pathName,
    })
    .then((res) => {
      if (res.status === 200) {
        // window.location.replace("/");
        console.log("deleted");
      }
    });
  window.location.replace("/");
};

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
            to="/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <button type="button" className="btn btn-info topListItem">
              Logout
            </button>
          </Link>
          <button
            type="button"
            className="btn btn-danger topListItem"
            style={{ textDecoration: "none", color: "white" }}
            onClick={handleClick}
          >
            Delete Account
          </button>
        </ul>
      </div>
    </div>
  );
}

export default NavBar2;
