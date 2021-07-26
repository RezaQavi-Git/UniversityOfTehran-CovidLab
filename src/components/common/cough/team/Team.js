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
    if (lang === "fa") {
      return (
        <React.Fragment>
          <br></br>
          <br></br>
          <div id="team" className="team">
            <div className="team-member">
              <img
                className="team-member-img"
                src={DRMORADI}
                alt="dr hadi moradi"
              />
              <p className="team-member-name">دکتر هادی مرادی</p>
              <br />
              <p className="team-member-title">رئیس گروه ازمایشگاه</p>
            </div>
            <div className="team-member">
              <img
                className="team-member-img"
                src={DRMORADI}
                alt="dr hadi moradi"
              />
              <p className="team-member-name">دکتر هادی مرادی</p>
              <br />
              <p className="team-member-title">رئیس گروه ازمایشگاه</p>
            </div>
            <div className="team-member">
              <img
                className="team-member-img"
                src={DRMORADI}
                alt="dr hadi moradi"
              />
              <p className="team-member-name">دکتر هادی مرادی</p>
              <br />
              <p className="team-member-title">رئیس گروه ازمایشگاه</p>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <br></br>
          <br></br>
          <div id="team" className="team">
            <div className="team-member">
              <img
                className="team-member-img"
                src={DRMORADI}
                alt="dr hadi moradi"
              />
              <p className="team-member-name">Dr Hadi Moradi</p>
              <br />
              <p className="team-member-title">Head of Laboratory Department</p>
            </div>
            <div className="team-member">
              <img
                className="team-member-img"
                src={DRMORADI}
                alt="dr hadi moradi"
              />
              <p className="team-member-name">Dr Hadi Moradi</p>
              <br />
              <p className="team-member-title">Head of Laboratory Department</p>
            </div>
            <div className="team-member">
              <img
                className="team-member-img"
                src={DRMORADI}
                alt="dr hadi moradi"
              />
              <p className="team-member-name">Dr Hadi Moradi</p>
              <br />
              <p className="team-member-title">Head of Laboratory Department</p>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Team;
