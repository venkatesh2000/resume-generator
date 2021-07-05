import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <div className="imageDiv">
        <img
          className="homeImage"
          src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="home image"
        />
      </div>
      <div className="statement">
        <h2 className="bigStatement">
          " Only 2% of the resumes make it past the first round. Be in the top
          2%. "
        </h2>
        <h4 className="smallStatement">
          Journey to your dream company is hard. Now make it a little smoother
          with this easy-to-use Resume Builder to build your very own
          professional resume in just three simple steps:
        </h4>
        <div className="steps">
          <h3>1. Enter your Information</h3>
          <i class="fas fa-arrow-down"></i>
          <h3>2. Preview your Resume</h3>
          <i class="fas fa-arrow-down"></i>
          <h3>3. Download your Resume</h3>
        </div>
        <Link
          className="link"
          to="/signup"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <button type="button" class="btn btn-success buildButton">
            Build My Resume Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
