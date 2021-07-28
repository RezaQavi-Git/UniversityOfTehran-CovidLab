import React from "react";

import "./team.css";

import DRMORADI from "../../../static/images/DrhadiMoradi.png";

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const lang = this.props.lang;
    return (
      <React.Fragment>
        <br></br>
        <div id="team" className="team">
          <div className="team-member">
            <img
              className="team-member-img"
              src={DRMORADI}
              alt="dr hadi moradi"
            />
            <p className="team-member-name">
              {lang === "fa" ? "دکتر هادی مرادی" : "Dr Hadi Moradi"}
            </p>
            <br />
            <p className="team-member-title">
              {lang === "fa"
                ? "رئیس گروه ازمایشگاه"
                : "Head of Laboratory Department"}
            </p>
          </div>

          <div className="team-member">
            <img
              className="team-member-img"
              src={DRMORADI}
              alt="dr hadi moradi"
            />
            <p className="team-member-name">
              {lang === "fa" ? "دکتر هادی مرادی" : "Dr Hadi Moradi"}
            </p>
            <br />
            <p className="team-member-title">
              {lang === "fa"
                ? "رئیس گروه ازمایشگاه"
                : "Head of Laboratory Department"}
            </p>
          </div>

          <div className="team-member">
            <img
              className="team-member-img"
              src={DRMORADI}
              alt="dr hadi moradi"
            />
            <p className="team-member-name">
              {lang === "fa" ? "دکتر هادی مرادی" : "Dr Hadi Moradi"}
            </p>
            <br />
            <p className="team-member-title">
              {lang === "fa"
                ? "رئیس گروه ازمایشگاه"
                : "Head of Laboratory Department"}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Team;
