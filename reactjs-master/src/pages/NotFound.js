import React from "react";
import "../components/styles/NotFound.css";
import Astronaut from "../images/astronaut.png";

const NotFound = () => {
  return (
    <div className="Container">
      <div className="NotFound__description">
        <h1>Error 404: La página que estas buscando no existe:</h1>
        <p>
          La página pudo ser movida o eliminada, si crees que esto es un error
          contacta al desarrollador
        </p>
      </div>
      <img src={Astronaut} alt="Astronaut" />
    </div>
  );
};

export default NotFound;
