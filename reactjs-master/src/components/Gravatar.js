import React from "react";
import md5 from "md5";

const Gravatar = props => {
  const email = props.email;
  const hash = md5(email || "example");
  const avatarUrl = `https://www.gravatar.com/avatar/${hash}?d=identicon`;

  return <img className={props.className} src={avatarUrl} alt="Avatar" />;
};

export default Gravatar;
