import React from "react";
import "../components/styles/Home.css";
import Astronauts from "../images/astronauts.svg";
import platziConf from "../images/platziconf-logo.svg";
import { Link } from "react-router-dom";
import dotenv from "dotenv";
dotenv.config();

const Home = () => {
  return (
    <div className="Home__container">
      <div className="Home__description">
        <img className="Home__hero-img" src={platziConf} alt="platziConf"></img>
        <h1 className="Title">Print your Badges</h1>
        <p className="Description">The easlest why to manage your conference</p>
        <Link
          className="btn btn-primary"
          to={process.env.PUBLIC_URL + "/badges"}
        >
          Start now
        </Link>
      </div>
      <img className="Home__hero-img" src={Astronauts} alt="Hero img" />
    </div>
  );
};

export default Home;
