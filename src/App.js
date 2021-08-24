import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./components/static/Fonts/vazir-fonts/fonts.css";

import Home from "./components/cough/home/Home";
import Record from "./components/cough/record/Record";
import Team from "./components/cough/team/Team";
import News from "./components/cough/news/News";
import Projects from "./components/cough/projects/Projects";


import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact={true}
            path="/fa"
            render={(props) => <Home lang="fa" {...props} />}
          ></Route>
          <Route
            exact={true}
            path="/en"
            render={(props) => <Home lang="en" {...props} />}
          ></Route>
          <Route
            exact={true}
            path="/record/fa"
            render={(props) => <Record lang="fa" {...props} />}
          ></Route>
          <Route
            exact={true}
            path="/record/en"
            render={(props) => <Record lang="en" {...props} />}
          ></Route>
          <Route
            exact={true}
            path="/team/fa"
            render={(props) => <Team lang="fa" {...props} />}
          ></Route>
          <Route
            exact={true}
            path="/team/en"
            render={(props) => <Team lang="en" {...props} />}
          ></Route>
          <Route
            exact={true}
            path="/projects/fa"
            render={(props) => <Projects lang="fa" {...props} />}
          ></Route>
          <Route
            exact={true}
            path="/projects/en"
            render={(props) => <Projects lang="en" {...props} />}
          ></Route>
          <Route
            exact={true}
            path="/news/fa"
            render={(props) => <News lang="fa" {...props} />}
          ></Route>
          <Route
            exact={true}
            path="/news/en"
            render={(props) => <News lang="en" {...props} />}
          ></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
