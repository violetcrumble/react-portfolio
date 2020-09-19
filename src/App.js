import React from "react";
import { Reset } from "styled-reset";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";

import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <Reset />

      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
