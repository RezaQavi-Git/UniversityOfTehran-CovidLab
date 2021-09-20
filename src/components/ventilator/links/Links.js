import React from "react";

import Footer from "../../common/footer/Footer";
import Navbar from "../common/header/Navbar";

import "./links.css";

import $ from "jquery";

class Links extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {
      lang,
      match: { params },
    } = this.props;
    const title = lang === "fa" ? "لینک ها" : "Links";
    const dir = lang==="fa" ? "rtl" : "ltr";

    document.title = title;
    $("body").attr("dir", dir);
  }

  render() {
    const {
      lang,
      match: { params },
    } = this.props;
    return (
      <React.Fragment>
        <div className="main">
          <Navbar lang={lang} page="links" />
          <p className="seprator">{lang === "fa" ? "لینک ها" : "Links"}</p>
          <LinksBody lang={lang} />
          <p className="seprator"></p>
          <Footer lang={lang} />
        </div>
      </React.Fragment>
    );
  }
}

class LinksBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const lang = this.props.lang;
    return (
      <React.Fragment>
        <div className="links-body">
          <p>{lang === "fa" ? "" : ""}</p>
          <p>Links to Ambu bag around the world</p>
          <a href="https://spectrum.ieee.org/news-from-around-ieee/the-institute/ieee-member-news/diy-ventilators-for-covid19-could-be-a-vital-stopgap">
            <p>
              {lang === "fa"
                ? "1.	https://spectrum.ieee.org/news-from-around-ieee/the-institute/ieee-member-news/diy-ventilators-for-covid19-could-be-a-vital-stopgap"
                : "1.	https://spectrum.ieee.org/news-from-around-ieee/the-institute/ieee-member-news/diy-ventilators-for-covid19-could-be-a-vital-stopgap"}
            </p>
          </a>
          <a href="https://spectrum.ieee.org/news-from-around-ieee/the-institute/ieee-member-news/indias-breath-of-hope-volunteers-designed-7-medical-devices-for-covid19-patients">
            <p>
              {lang === "fa"
                ? "2.	https://spectrum.ieee.org/news-from-around-ieee/the-institute/ieee-member-news/indias-breath-of-hope-volunteers-designed-7-medical-devices-for-covid19-patients"
                : "2.	https://spectrum.ieee.org/news-from-around-ieee/the-institute/ieee-member-news/indias-breath-of-hope-volunteers-designed-7-medical-devices-for-covid19-patients"}
            </p>
          </a>
          <a href="https://emergency-vent.mit.edu/">
            <p>
              {lang === "fa"
                ? "3.	https://emergency-vent.mit.edu/"
                : "3.	https://emergency-vent.mit.edu/"}
            </p>
          </a>
          <a href="https://med.umn.edu/covid19Ventilator">
            <p>
              {lang === "fa"
                ? "4.	https://med.umn.edu/covid19Ventilator"
                : "4.	https://med.umn.edu/covid19Ventilator"}
            </p>
          </a>
          <a href="https://www.uff.ufl.edu/giving-opportunities/024631-covid-19-ventilators/">
            <p>
              {lang === "fa"
                ? "5.	https://www.uff.ufl.edu/giving-opportunities/024631-covid-19-ventilators/"
                : "5.	https://www.uff.ufl.edu/giving-opportunities/024631-covid-19-ventilators/"}
            </p>
          </a>
          <a href="https://www.reuters.com/article/us-health-coronavirus-afghanistan-ventil/afghan-all-girls-robotics-team-designs-low-cost-ventilator-to-treat-coronavirus-patients-idUSKCN24L0WO">
            <p>
              {lang === "fa"
                ? "6.	https://www.reuters.com/article/us-health-coronavirus-afghanistan-ventil/afghan-all-girls-robotics-team-designs-low-cost-ventilator-to-treat-coronavirus-patients-idUSKCN24L0WO"
                : "6.	https://www.reuters.com/article/us-health-coronavirus-afghanistan-ventil/afghan-all-girls-robotics-team-designs-low-cost-ventilator-to-treat-coronavirus-patients-idUSKCN24L0WO"}
            </p>
          </a>

          
        </div>
      </React.Fragment>
    );
  }
}

export default Links;
