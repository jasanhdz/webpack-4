import React from "react";

const BadgeForm = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <form onSubmit={props.handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            onChange={props.onChange}
            value={props.firstName}
            required
          ></input>
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            className="form-control"
            type="text"
            name="lastName"
            onChange={props.onChange}
            value={props.lastName}
            required
          ></input>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            onChange={props.onChange}
            value={props.email}
            required
          ></input>
        </div>
        <div className="form-group">
          <label>Job Title</label>
          <input
            className="form-control"
            type="text"
            name="jobTitle"
            onChange={props.onChange}
            value={props.jobTitle}
            required
          ></input>
        </div>
        <div className="form-group">
          <label>Twitter</label>
          <input
            className="form-control"
            type="text"
            name="twitter"
            onChange={props.onChange}
            value={props.twitter}
            required
          ></input>
        </div>

        <button onClick={props.handleClick} className="btn btn-primary">
          Save
        </button>

        {props.error && <p className="text-danger">{props.error.message}</p>}
      </form>
    </div>
  );
};

export default BadgeForm;
