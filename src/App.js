import { AnimateSharedLayout, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Components/Common/Navbar/Navbar";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import ProjectDetail from "./Components/HomePage/ProjectsPage/Projects/Archive/Detail/ProjectDetail";

function App(props) {
  

  return (
    <div className="App">
      {/* <ThemeProvider theme={theme}> */}
        <AnimateSharedLayout type="crossfade">
          <Router>
            <Navbar />

            <Switch>
              <Route exact path={["/:id", "/"]} component={HomePage}></Route>
              <Route
                path="/projectDetail/:projectId"
                component={ProjectDetail}
              />

              <Route path="/users"></Route>
            </Switch>
          </Router>
        </AnimateSharedLayout>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
