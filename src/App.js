import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Cough from './components/cough/Cough';

import $ from 'jquery';
import './components/static/Fonts/vazir-fonts/fonts.css';
import Record from './components/record/Record';


class App extends React.Component {

  componentDidMount() {
    $('body').attr('dir', 'rtl');
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Cough}></Route>
          <Route exact={true} path="/record" component={Record}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
