import React, { useState } from "react";
import Badge from "../../components/Badge";
import { Link } from "react-router-dom";
import confLogo from "../../images/platziconf-logo.svg";
import "../../components/styles/BadgeDetails.css";
import DeleteBadgeModal from "../../components/DeleteBadgeModal";
import dotenv from "dotenv";
dotenv.config();
const useIncreseCounter = max => {
  const [count, setCount] = React.useState(0);

  if (count > max) {
    setCount(0);
  }

  return [count, setCount];
};

const BadgeDetails = props => {
  const [count, setCount] = useIncreseCounter(4);
  const badge = props.badge;
  return (
    <React.Fragment>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row details">
            <div className="col-6 item">
              <img src={confLogo} alt="Logo de la conferencia" />
            </div>
            <div className="col-6 item BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName || "Jasan"} {badge.lastName || "Hernández"}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              id={badge.id}
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              jobTitle={badge.jobTitle}
              twitter={badge.twitter}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                <button
                  onClick={() => setCount(count + 1)}
                  className="btn btn-primary mr-4"
                >
                  Increase Count {count}
                </button>
                <Link
                  className="btn btn-primary mb-4"
                  to={process.env.PUBLIC_URL + `/badges/${badge.id}/edit`}
                >
                  Edit
                </Link>
              </div>

              <div>
                <button
                  onClick={props.handleClick}
                  type="button"
                  className="btn btn-danger"
                >
                  Delete
                </button>
                {props.modalIsVisibility && (
                  <DeleteBadgeModal
                    onDeleteBadge={props.deleteBadge}
                    onClose={props.handleClick}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BadgeDetails;
