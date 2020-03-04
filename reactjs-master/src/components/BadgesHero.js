import React from "react";
import "./styles/Badges.css";
import logoHeader from "../images/badge-header.svg";

const BadgesHero = () => {
  return (
    <div className="Badges">
      <div className="Badges__hero">
        <div className="Badges__container">
          <img className="Badges_conf-logo" src={logoHeader} alt="Logo"></img>
        </div>
      </div>
    </div>
  );
};

export default BadgesHero;
