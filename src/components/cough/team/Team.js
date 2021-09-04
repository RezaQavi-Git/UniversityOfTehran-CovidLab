import React from "react";
import Footer from "../../common/footer/Footer";
import Navbar from "../common/header/Navbar";

import HADIMORADI from "../../static/images/hadi-moradi.png";
import RESHADHOSSEINI from "../../static/images/reshad-hosseini.png";
import AIDAKHOZAEE from "../../static/images/aida-khozaee.png";
import SAMANMAHDIAN from "../../static/images/saman-mahdian.png";
import MAHBODNOURI from "../../static/images/mahbod-nouri.png";

import $ from "jquery";
import "../../common/team.css";

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {
      lang,
      match: { params },
    } = this.props;
    const title = lang === "fa" ? "تیم ما" : "Team";
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
      <React.Fragment>
        <div className="main">
          <Navbar lang={lang} />
          <p className="seprator">{lang==="fa" ? "اعضا" : "Members" }</p>
          <TeamMembers lang={lang} />
          <p className="seprator"></p>
          <Footer lang={lang} />
        </div>
      </React.Fragment>
    );
  }
}

class TeamMembers extends React.Component {
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
              src={HADIMORADI}
              alt="hadi moradi"
            />
            <p className="team-member-name">
              {lang === "fa" ? "دکتر هادی مرادی" : "Dr Hadi Moradi"}
            </p>
            <br />
            <p className="team-member-title">
              {lang === "fa"
                ? "سرپرست آزمایشگاه،دانشیار گروه هوش ماشین و رباتیک دانشکده مهندسی برق و کامپیوتر دانشگاه تهران"
                : "Associate Professor, Department of Machine Intelligence and Robotics, ECE, University of Tehran"}
            </p>
          </div>

          <div className="team-member">
            <img
              className="team-member-img"
              src={RESHADHOSSEINI}
              alt="reshad hosseini"
            />
            <p className="team-member-name">
              {lang === "fa" ? "رشاد حسینی" : "Reshad Hosseini"}
            </p>
            <br />
            <p className="team-member-title">
              {lang === "fa"
                ? "استادیار گروه هوش ماشین و رباتیک دانشکده مهندسی برق و کامپیوتر دانشگاه تهران"
                : "Assistant Professor, Department of Machine Intelligence and Robotics, ECE, University of Tehran"}
            </p>
          </div>

          <div className="team-member">
            <img
              className="team-member-img"
              src={AIDAKHOZAEE}
              alt="aida khozaee"
            />
            <p className="team-member-name">
              {lang === "fa" ? "آیدا خزایی" : "Aida Khozaee"}
            </p>
            <br />
            <p className="team-member-title">
              {lang === "fa"
                ? "دکترای هوش مصنوعی دانشکده مهندسی برق و کامپیوتر دانشگاه تهران"
                : "PhD in Artificial Intelligence, ECE, University of Tehran"}
            </p>
          </div>
        </div>

        <div id="team" className="team">
          <div className="team-member">
            <img
              className="team-member-img"
              src={SAMANMAHDIAN}
              alt="saman mahdanian"
            />
            <p className="team-member-name">
              {lang === "fa" ? "سامان مهدانیان" : "Saman Mahdanian"}
            </p>
            <br />
            <p className="team-member-title">
              {lang === "fa"
                ? "دانشجوی کارشناسی علوم کامپیوتر دانشگاه تهران"
                : "BS student in Computer Science, University of Tehran"}
            </p>
          </div>
          <div className="team-member">
            <img
              className="team-member-img"
              src={MAHBODNOURI}
              alt="mahbod nouri"
            />
            <p className="team-member-name">
              {lang === "fa" ? "مهبد نوری" : "Mahbod Nouri"}
            </p>
            <br />
            <p className="team-member-title">
              {lang === "fa"
                ? " دانشجوی کارشناسی ارشد علوم شناختی دانشگاه ادینبورگ"
                : "Master student in Cognitive Science, University of Edinburgh"}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Team;
