import React from "react";

import "./selectpage.css";

import VENTILATOR from "../components/static/images/ventilator.png";
import COVIDRECORD from "../components/static/images/covid-record.png";

import $ from "jquery";

class SelectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {
      lang,
      match: { params },
    } = this.props;
    const title = lang === "fa" ? "کویید 19" : "Covid 19";
    const dir = lang === "fa" ? "rtl" : "ltr";

    document.title = title;
    $("body").attr("dir", dir);
  }

  render() {
    const {
      lang,
      match: { params },
    } = this.props;

    return (
      <div className="selector-container">
        <div className="selector-bk">
          <p className="centered">
            {lang === "fa" ? "ونتیلاتور" : "Ventilator"}
          </p>
          <img
            src={VENTILATOR}
            alt="Ventilator"
            className="selector-bk-img"
          ></img>
        </div>
        <div className="selector-bk">
          <p className="centered">
            {lang === "fa"
              ? "غربالگری صوتی کووید 19"
              : "Covid Audio Screening 19"}
          </p>
          <img
            src={COVIDRECORD}
            alt="Covid record voice"
            className="selector-bk-img"
          ></img>
        </div>
      </div>
    );
  }
}

export default SelectPage;
