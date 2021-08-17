import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./components/static/Fonts/vazir-fonts/fonts.css";

import Cough from "./components/cough/Cough";
import Record from "./components/record/Record";
import Team from "./components/team/Team";

import "./App.css";
import SelectPage from "./selectpage/SelectPage";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route
            exact={true}
            path="/select"
            render={(props) => <SelectPage lang="fa" {...props} />}
          ></Route>


          <Route
            exact={true}
            path="/fa"
            render={(props) => <Cough lang="fa" {...props} />}
          ></Route>
          <Route
            exact={true}
            path="/en"
            render={(props) => <Cough lang="en" {...props} />}
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
        </Switch>
      </Router>
    );
  }
}

export default App;
