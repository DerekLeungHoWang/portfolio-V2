import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { createGlobalStyle, default as styled } from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./Components/Common/Navbar/Navbar";
import './App.css'
 






function App() {


  return (
    <>
      <Router>
        <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            {/* <About /> */}
          </Route>
          <Route path="/users">
            {/* <Users /> */}
          </Route>
          <Route path="/">
            {/* <Home /> */}
          </Route>
        </Switch>

      </Router>
    </>


  );
}

export default App;
