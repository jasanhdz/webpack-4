import React, { useState } from "react";
import data from "../data.json";
import Loader from "./Loader";
import logo from "../../images/platzi.png";
import video from "../../video/que-es-core.mp4";

const App = () => {
  const [loaderList, setLoaderList] = useState(undefined);
  const handleClick = () => {
    setLoaderList(data.loaders);
  };
  console.log(loaderList);
  return (
    <div>
      <video src={video} width={360} alt="video" controls poster={logo} />
      Que linda aplicación hecha en React {"<3"}
      <img width={40} src={logo} alt="logo" />
      {loaderList && (
        <ul>
          {loaderList.map(item => (
            <Loader key={item.id} data={item} />
          ))}
        </ul>
      )}
      <button onClick={handleClick}>
        Mostrar lo aprendido hasta el momento
      </button>
    </div>
  );
};

export default App;
