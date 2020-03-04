import React, { useState, useEffect, useRef } from "react";
import BadgesHero from "../components/BadgesHero";
import BadgesContainer from "../components/BadgesContainer";
import PageLoading from "../components/PageLoading";
import api from "../api";

const Badges = props => {
  // console.log("1. Constructor()");
  const [stateData, setStateData] = useState({ data: undefined });
  const [state, setState] = useState({ loading: true, error: null });

  const fetchData = async () => {
    setState({ loading: true, error: null });
    try {
      const data = await api.badges.list();
      setStateData({ data: data });
      setState({ loading: false, error: null });
    } catch (error) {
      setState({ loading: false, error: error });
    }
  };

  useEffect(() => {
    // console.log("3. ComponentDidMount()");
    fetchData();
    let intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  // console.log(state);
  if (state.loading === true && !stateData.data) {
    return <PageLoading />;
  }

  if (state.error) {
    return `Error: ${state.error.message}`;
  }

  return (
    <React.Fragment>
      <BadgesHero />
      <BadgesContainer loading={state.loading} data={stateData.data} />
    </React.Fragment>
  );
};

export default Badges;
