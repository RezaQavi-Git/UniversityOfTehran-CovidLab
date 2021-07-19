import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import $ from 'jquery';
import './components/static/Fonts/vazir-fonts/fonts.css';


import Cough from './components/fa/cough/Cough';
import Record from './components/fa/record/Record';
import CoughEn from './components/en/cough/Cough';
import RecordEn from './components/en/record/Record';

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
          <Route exact={true} path="/en" component={CoughEn}></Route>
          <Route exact={true} path="/record/en" component={RecordEn}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
