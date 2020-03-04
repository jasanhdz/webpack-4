import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";
import Gravatar from "./Gravatar";

const Badge = props => {
  return (
    <div className="Badge">
      <div className="Badge__header">
        <img src={confLogo} alt="Logo de la conferencia" />
      </div>
      <div className="Badge__section-name">
        <Gravatar className="Badge__avatar" email={props.email} />
        <h1>
          {props.firstName || "FIRST_NAME"} <br />
          {props.lastName || "LAST_NAME"}
        </h1>
      </div>
      <div className="Badge__section-info">
        <h3>{props.jobTitle || "JOB_TITLE"}</h3>
        <div>@{props.twitter || "TWITTER"}</div>
      </div>
      <div className="Badge__footer">#platziconf</div>
    </div>
  );
};

export default Badge;
