import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="imageDiv">
        <img
          className="homeImage"
          src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="home image"
        />
      </div>
      <div className="statement">
        <h2 className="bigStatement">
          " Only 2% of resumes make it past the first round. Be in the top 2%. "
        </h2>
        <h4 className="smallStatement">
          Save your time and effort with this easy to use Resume Builder to
          build your custom style professional resume and apply for your dream
          job in easy and fast in just three easy steps.
        </h4>
        <div className="steps">
          <h3>1. Enter your information</h3>
          <i class="fas fa-arrow-down"></i>
          <h3>2. Choose your template</h3>
          <i class="fas fa-arrow-down"></i>
          <h3>3. Download your Resume</h3>
        </div>
        <button type="button" class="btn btn-success buildButton">
          <Link className="link" to="/information">
            Build My Resume Now
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
