import React, { useState } from "react";
import data from "../data.json";
import Loader from "./Loader";
const App = () => {
  const [loaderList, setLoaderList] = useState(undefined);
  const handleClick = () => {
    setLoaderList(data.loaders);
  };
  console.log(loaderList);
  return (
    <div>
      Que linda aplicación hecha en React {"<3"}
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
