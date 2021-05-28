import { AnimateSharedLayout, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { createGlobalStyle, default as styled } from "styled-components";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./Components/Common/Navbar/Navbar";
import './App.css'
import CoverPage from "./Components/HomePage/CoverPage/CoverPage";
import ProjectsPage from "./Components/HomePage/ProjectsPage/ProjectsPage";
import HomePage from "./Components/HomePage/HomePage";
import RightNav from "./Components/Common/RightNav/RightNav";
import { Header } from "./Components/HomePage/ProjectsPage/Projects/Featured/Header";







function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#2FA687',
        secondary: "#F3EADA",
        background: '#0a192f',
        frontend: '#A4C3A9',
        backend: "#82AB9B",
        deployment: "#65928D",
        testing: "#4E797E",
        others: "#3C606C"
      },

    }
  })

  return (
    <div className="App" >
      <ThemeProvider theme={theme}>
        <AnimateSharedLayout type="crossfade">
          <Router>
            <Navbar />
       
            <Switch>
              <Route path={["/portfolio-V2/:id", "/"]} component={HomePage} >


              </Route>
              <Route path="/about">
                {/* <About /> */}
              </Route>
              <Route path="/users">
                {/* <Users /> */}
              </Route>
            </Switch>

          </Router>
        </AnimateSharedLayout>
      </ThemeProvider>
    </div>


  );
}

export default App;
