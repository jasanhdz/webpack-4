// By Jasan Hernández
import React, { useState, useRef, useEffect } from "react";

const Mountend = setState => {
  let timeoutRef = useRef();
  useEffect(() => {
    console.log("3. ComponentDidMount");
    // Example of calling an api
    timeoutRef.current = setTimeout(() => {
      setState({
        data: ["Hello"]
      });
    }, 3000);
  }, []);
  return () => {
    //componentWillMount()
    console.log("4. componentWillMount()");
    clearTimeout(timeoutRef.current);
  };
};

const HelloWorld = props => {
  const [state, setState] = useState({ data: [] });
  console.log(`1. execute Constructor() ${props.hello}`);
  // .... Constructor //
  Mountend(setState);
  console.log("2. excute render()");
  return (
    <div>
      <h1>{state.data}</h1>
    </div>
  );
};
export default HelloWorld;
