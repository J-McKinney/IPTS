import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Inquiry from "./Pages/Inquiry/Inquiry";
import FAQ from "./Pages/FAQ/FAQ";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Router basename="/">
          <Switch>
            <Route exact path="/IPTS" component={Landing} />
            <Route path="/Inquiry" component={Inquiry} />
            <Route path="/FAQ" component={FAQ} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
