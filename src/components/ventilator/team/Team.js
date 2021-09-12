import React from "react";

import Footer from "../../common/footer/Footer";
import Navbar from "../common/header/Navbar";

import HADIMORADI from "../../static/images/hadi-moradi.png";
import HASANRAFIE from "../../static/images/hasan-rafie.png";
import FATEMINIA from "../../static/images/DrFateminia.png";
import SETAREDAN from "../../static/images/DrSetaredan.png";
import MARYAMKHALILI from "../../static/images/maryam-khalily.png";
import MOSTAFADERAFSHIAN from "../../static/images/mostafa-derafshian.png";

import SAHELSALEHI from "../../static/images/sahel-salehi.png";
import HOSEINVALE from "../../static/images/hossein-vale.png";
import ZAHRASHARIATI from "../../static/images/zahra-shariati.png";
import MOHSENNOROUZI from "../../static/images/mohsen-norouzi.png";


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
              {lang === "fa" ? "هادی مرادی" : "Hadi Moradi"}
            </p>
            <br />
            <p className="team-member-title">
              {lang === "fa"
                ? "سرپرست آزمایشگاه،هیئت علمی گروه هوش ماشین و رباتیک دانشکده مهندسی برق و کامپیوتر دانشگاه تهران"
                : "Head of Laboratory, Faculty of Machine Intelligence and Robotics, Faculty of Electrical and Computer Engineering, University of Tehran"}
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
              {lang === "fa" ? "کمال الدین ستاره دان" : "Kamaleddin Setaredan"}
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
              alt="Mehran fateminia"
            />
            <p className="team-member-name">
              {lang === "fa" ? "مهران فاطمی نیا" : "Mehran Fateminia"}
            </p>
            <br />
            <p className="team-member-title">
              {lang === "fa"
                ? "دکترای طراحی صنعتی دانشگاه تهران"
                : "PhD in Industrial Design, University of Tehran"}
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

        <div id="team" className="team">
          <div className="team-member">
            <img
              className="team-member-img"
              src={SAHELSALEHI}
              alt="sahel salehi"
            />
            <p className="team-member-name">
              {lang === "fa" ? "ساحل صالحی" : "Sahel Salehi"}
            </p>
            <br />
            <p className="team-member-title">
              {lang === "fa"
                ? "کارشناسی ارشد مهندسی مکانیک دانشگاه تهران"
                : "Master of Mechanical Engineering, University of Tehran"}
            </p>
          </div>
          <div className="team-member">
            <img
              className="team-member-img"
              src={HOSEINVALE}
              alt="Hossein Vale"
            />
            <p className="team-member-name">
              {lang === "fa" ? "حسین واله" : "Hossein Vale"}
            </p>
            <br />
            <p className="team-member-title">
              {lang === "fa"
                ? " دانشجوی کارشناسی مهندسی برق دانشگاه تهران"
                : "Undergraduate student of electrical engineering, University of Tehran"}
            </p>
          </div>

          <div className="team-member">
            <img
              className="team-member-img"
              src={ZAHRASHARIATI}
              alt="Zahra Shariati"
            />
            <p className="team-member-name">
              {lang === "fa" ? "زهرا شریعتی" : "Zahra Shariati"}
            </p>
            <br />
            <p className="team-member-title">
              {lang === "fa"
                ? "کارشناسی ارشد برق دانشگاه میلان ایتالیا"
                : "Master of Electrical Engineering, University of Milan, Italy"}
            </p>
          </div>
        </div>

        <div id="team" className="team">
          <div className="team-member">
            <img
              className="team-member-img"
              src={MOHSENNOROUZI}
              alt="Mohsen Norouzi"
            />
            <p className="team-member-name">
              {lang === "fa" ? "محسن نوروزی" : "Mohsen Norouzi"}
            </p>
            <br />
            <p className="team-member-title">
              {lang === "fa"
                ? "کارشناسی ارشد طراحی صنعتی دانشگاه تهران و عضو هیئت مدیره ی شرکت طرح آفرینان صنعت فرد"
                : "Master of Industrial Design, University of Tehran and member of the board of directors of Tarf Afarinan Sanat Fard Company"}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Team;
