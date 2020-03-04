import React, { useState, useMemo } from "react";
import "./styles/Badges.css";
import BadgesList from "./BadgesList";
import { Link } from "react-router-dom";
import MiniLoader from "./miniLoader";
import dotenv from "dotenv";
dotenv.config();

const useSearchBadges = badges => {
  const [query, setQuery] = useState("");
  const [filteredBadges, setFilterBadges] = useState(badges);

  useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilterBadges(result);
  }, [query, badges, query]);

  return { setQuery, filteredBadges };
};

const BadgesContainer = props => {
  const badges = props.data;
  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  const handleChange = e => {
    setQuery(e.target.value);
  };
  return (
    <div className="Badges__container">
      <div className="Badges__buttons">
        <Link
          className="btn btn-primary"
          to={process.env.PUBLIC_URL + "/badges/new"}
        >
          New Badges
        </Link>
      </div>
      {filteredBadges.length === 0 && (
        <div>
          <h3>No badges were found</h3>
          {/* <div className="form-group">
            <label>Filter Badges</label>
            <input
              type="text"
              className="form-control"
              value={query}
              onChange={handleChange}
            />
          </div> */}
          <Link
            className="btn btn-primary"
            to={process.env.PUBLIC_URL + "/badges/new"}
          >
            Create new Badge
          </Link>
        </div>
      )}
      <div className="Badges_list">
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={handleChange}
          />
        </div>
        <div className="Badges__container">
          <ul className="list-unstyled">
            {filteredBadges.map(data => {
              return <BadgesList key={data._id} {...data} />;
            })}
          </ul>
          {props.loading === true && <MiniLoader />}
        </div>
      </div>
    </div>
  );
};

export default BadgesContainer;
