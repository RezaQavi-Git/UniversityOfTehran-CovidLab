import React from "react";

import Footer from "../../common/footer/Footer";
import Navbar from "../common/header/Navbar";

import HADIMORADI from "../../static/images/hadi-moradi.png";
import HASANRAFIE from "../../static/images/hasan-rafie.png";
import FATEMINIA from "../../static/images/DrFateminia.png";
import SETAREDAN from "../../static/images/DrSetaredan.png";
import MARYAMKHALILI from "../../static/images/maryam-khalily.png";
import MOSTAFADERAFSHIAN from "../../static/images/mostafa-derafshian.png";

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
          <p className="seprator">{lang === "fa" ? "اعضا" : "Members"}</p>
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
              src={HASANRAFIE}
              alt="Hassan Rafii"
            />
            <p className="team-member-name">
              {lang === "fa" ? "حسان رفیع" : "Hassan Rafi"}
            </p>
            <br />
            <p className="team-member-title">
              {lang === "fa"
                ? "مدیرعامل شرکت ارکان آرا تجارت البرز، فوق لیسانس مهندسی پزشکی دانشگاه تهران"
                : "Managing Director of Arkan Ara Tejarat Alborz Company, Master of Medical Engineering, University of Tehran"}
            </p>
          </div>
          <div className="team-member">
            <img
              className="team-member-img"
              src={MARYAMKHALILI}
              alt="Maryam Khalili"
            />
            <p className="team-member-name">
              {lang === "fa" ? "مریم خلیلی" : "Maryam Khalili"}
            </p>
            <br />
            <p className="team-member-title">
              {lang === "fa"
                ? "عضو هیئت علمی گروه طراحی صنعتی پردیس هنرهای زیبا دانشگاه تهران"
                : "Member of the Faculty of Industrial Design, Fine Arts Campus, University of Tehran"}
            </p>
          </div>
        </div>

        <div id="team" className="team">
          <div className="team-member">
            <img
              className="team-member-img"
              src={SETAREDAN}
              alt="Dr Setaredan"
            />
            <p className="team-member-name">
              {lang === "fa" ? "دکتر ستاره دان" : "Dr Setaredan"}
            </p>
            <br />
            <p className="team-member-title">
              {lang === "fa"
                ? "هیئت علمی دانشکده مهندسی برق و کامپیوتر دانشگاه تهران"
                : "Faculty of Electrical and Computer Engineering, University of Tehran"}
            </p>
          </div>
          <div className="team-member">
            <img
              className="team-member-img"
              src={FATEMINIA}
              alt="Dr fateminia"
            />
            <p className="team-member-name">
              {lang === "fa" ? "دکتر فاطمی نیا" : "Dr Fateminia"}
            </p>
            <br />
            <p className="team-member-title">
              {lang === "fa"
                ? "طراحی صنعتی دانشگاه تهران"
                : "Industrial design, University of Tehran"}
            </p>
          </div>

          <div className="team-member">
            <img
              className="team-member-img"
              src={MOSTAFADERAFSHIAN}
              alt="Mostafa Darfshian"
            />
            <p className="team-member-name">
              {lang === "fa" ? "مصطفی درفشیان" : "Mostafa Darfshian"}
            </p>
            <br />
            <p className="team-member-title">
              {lang === "fa"
                ? "کارشناسی ارشد مهندسی پزشکی دانشگاه تهران"
                : "Master of Medical Engineering, University of Tehran"}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Team;
