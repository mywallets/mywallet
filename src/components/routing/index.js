import React from "react";
import Home from '../Home.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import About from "../About.js";

function WaRouter() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default WaRouter; 