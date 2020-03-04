import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import BadgeNew from "../pages/BadgeNew";
import BadgeEdit from "../pages/BadgeEdit";
import Badges from "../pages/Badges";
import Layout from "./Layout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import BadgeDetails from "../pages/BadgeDetailsContainer";

require("dotenv").config();
const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

console.log(process.env.PUBLIC_URL + " la url era");

const App = () => {
  return (
    <BrowserRouter history={history}>
      <Layout>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/badges"}
            component={Badges}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/badges/new"}
            component={BadgeNew}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/badges/:badgeId"}
            component={BadgeDetails}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/badges/:badgeId/edit"}
            component={BadgeEdit}
          />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
