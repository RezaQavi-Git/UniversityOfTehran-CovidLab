import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./components/static/Fonts/vazir-fonts/fonts.css";

import Home from "./components/cough/home/Home";
import Record from "./components/cough/record/Record";
import Team from "./components/cough/team/Team";
import News from "./components/cough/news/News";
import Projects from "./components/cough/projects/Projects";
import Main from "./components/mainpage/Main";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route
            exact={true}
            path="/coughtest/fa"
            render={(props) => <Main lang="fa" {...props} />}
          ></Route>
          <Route
            exact={true}
            path="/coughtest/en"
            render={(props) => <Main lang="en" {...props} />}
          ></Route>
          <Route
            exact={true}
            path="/cough/fa"
            render={(props) => <Home lang="fa" {...props} />}
          ></Route>
          <Route
            exact={true}
            path="/cough/en"
            render={(props) => <Home lang="en" {...props} />}
          ></Route>
          <Route
            exact={true}
            path="/cough/record/fa"
            render={(props) => <Record lang="fa" {...props} />}
          ></Route>
          <Route
            exact={true}
            path="/cough/record/en"
            render={(props) => <Record lang="en" {...props} />}
          ></Route>
          <Route
            exact={true}
            path="/cough/team/fa"
            render={(props) => <Team lang="fa" {...props} />}
          ></Route>
          <Route
            exact={true}
            path="/cough/team/en"
            render={(props) => <Team lang="en" {...props} />}
          ></Route>
          <Route
            exact={true}
            path="/cough/projects/fa"
            render={(props) => <Projects lang="fa" {...props} />}
          ></Route>
          <Route
            exact={true}
            path="/cough/projects/en"
            render={(props) => <Projects lang="en" {...props} />}
          ></Route>
          <Route
            exact={true}
            path="/cough/news/fa"
            render={(props) => <News lang="fa" {...props} />}
          ></Route>
          <Route
            exact={true}
            path="/cough/news/en"
            render={(props) => <News lang="en" {...props} />}
          ></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
