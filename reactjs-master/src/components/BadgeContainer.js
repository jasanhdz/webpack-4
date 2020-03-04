import React from "react";

const BadgeContainer = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 item">{props.Badge}</div>
        <div className="col-6 item">{props.Form}</div>
      </div>
    </div>
  );
};

export default BadgeContainer;
