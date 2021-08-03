import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "./components/static/Fonts/vazir-fonts/fonts.css";

import Cough from "./components/cough/Cough";
import Record from "./components/record/Record";

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact={true}
            path="/cough/fa"
            render={(props) => <Cough lang="fa" {...props} />}
          ></Route>
          <Route
            exact={true}
            path="/record/fa"
            render={(props) => <Record lang="fa" {...props} />}
          ></Route>
          <Route
            exact={true}
            path="/cough/en"
            render={(props) => <Cough lang="en" {...props} />}
          ></Route>
          <Route
            exact={true}
            path="/record/en"
            render={(props) => <Record lang="en" {...props} />}
          ></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
