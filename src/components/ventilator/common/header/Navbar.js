import React from "react";
import { Link } from "react-router-dom";


import FALOGO from "../../../static/images/fa-lab-logo.png";
import ENLOGO from "../../../static/images/en-lab-logo.png";
import AUFLOGO from "../../../static/images/auf.png";


import "../../../common/navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      small_window: false,
    };
  }

  show_vertical_navbar() {
    document.getElementById("vertical-navbar").style.display = "flex";
    this.setState({
      small_window: true,
    });
  }

  hide_vertical_navbar() {
    document.getElementById("vertical-navbar").style.display = "none";
    this.setState({
      small_window: false,
    });
  }

  render() {
    const lang = this.props.lang;

    return (
      <div className="navbar-container">
        <div id="small-navbar" className={"small-navbar"}>
          <button
            className="small-navbar-button"
            onClick={
              this.state.small_window
                ? this.hide_vertical_navbar.bind(this)
                : this.show_vertical_navbar.bind(this)
            }
          >
            <span>&#9776; {lang === "fa" ? "منو" : "Menu"}</span>
          </button>
        </div>
        <HorizontalNavbar lang={lang} />
        <VerticalNavbar id="vertical-navbar" lang={lang} />
      </div>
    );
  }
}

class VerticalNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      small_window: false,
    };
  }

  setLang(lang) {
    var path = window.location.pathname;
    path = path.slice(0, path.length - 2);
    lang === "fa"
      ? window.location.replace(path + "en")
      : window.location.replace(path + "fa");
  }

  render() {
    const lang = this.props.lang;
    return (
      <div id="vertical-navbar" className={"vertical-navbar " + lang}>
        <Link to={"/" + lang}>
          {lang === "fa" ? "صفحه اصلی" : "Main Page"}
        </Link>
        <Link to={"/ventilator/" + lang}>
          {lang === "fa" ? "خانه" : "Home"}
        </Link>
        <Link to={"/ventilator/team/" + lang}>
          {lang === "fa" ? "تیم ما" : "Team"}
        </Link>
        <Link to={"/ventilator/documents/" + lang}>
          {lang === "fa" ? "مستندات" : "Documents"}
        </Link>
        <Link to={"/ventilator/links/" + lang}>
          {lang === "fa" ? "لینک ها" : "Links"}
        </Link>
        <Link to={"/ventilator/news/" + lang}>
          {lang === "fa" ? "اخبار" : "News"}
        </Link>
        <Link to={"/ventilator/standards/" + lang}>
          {lang === "fa" ? "استانداردها" : "Standards"}
        </Link>
        <button className="changeLang-btn"  onClick={this.setLang.bind(this, lang)}>fa/en</button>
      </div>
    );
  }
}

class HorizontalNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      small_window: false,
    };
  }

  setLang(lang) {
    var path = window.location.pathname;
    path = path.slice(0, path.length - 2);
    lang === "fa"
      ? window.location.replace(path + "en")
      : window.location.replace(path + "fa");
  }

  render() {
    const lang = this.props.lang;

    return (
      <div id="horizontal-navbar" className={"horizontal-navbar-" + lang}>
        <div className="navbar-logo">
          <img
            src={AUFLOGO}
            alt="logo"
            className="navbar-logo-img-regtangle"
          />
          <img
            src={lang === "fa" ? FALOGO : ENLOGO}
            alt="logo"
            className="navbar-logo-img"
          />
          <p
          className="navbar-logo-text">
            {lang === "fa"
              ? "ونتیلاتور"
              : "Ventilator"}
          </p>
        </div>
        <div className="navbar-links">
        <Link to={"/" + lang}>
          {lang === "fa" ? "صفحه اصلی" : "Main Page"}
        </Link>
          <Link to={"/ventilator/" + lang}>
            {lang === "fa" ? "خانه" : "Home"}
          </Link>
          <Link to={"/ventilator/team/" + lang}>
            {lang === "fa" ? "تیم ما" : "Team"}
          </Link>
          <Link to={"/ventilator/documents/" + lang}>
            {lang === "fa" ? "مستندات" : "Documents"}
          </Link>
          <Link to={"/ventilator/links/" + lang}>
            {lang === "fa" ? "لینک ها" : "Links"}
          </Link>
          <Link to={"/ventilator/news/" + lang}>
            {lang === "fa" ? "اخبار" : "News"}
          </Link>
          <Link to={"/ventilator/standards/" + lang}>
            {lang === "fa" ? "استانداردها" : "Standards"}
          </Link>
        <button className="changeLang-btn"  onClick={this.setLang.bind(this, lang)}>fa/en</button>
        </div>
      </div>
    );
  }
}

export default Navbar;
