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
    const page = this.props.page;

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
        <HorizontalNavbar lang={lang} page={page} />
        <VerticalNavbar id="vertical-navbar" lang={lang} page={page} />
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
    const page = this.props.page;

    return (
      <div id="vertical-navbar" className={"vertical-navbar " + lang}>
        <Link to={"/" + lang}>
          <p> {lang === "fa" ? "صفحه اصلی" : "Main Page"}</p>
        </Link>
        <Link
          to={"/ventilator/" + lang}
          className={page === "home" ? "active-page" : ""}
        >
          <p> {lang === "fa" ? "خانه" : "Home"}</p>
        </Link>
        <Link
          to={"/ventilator/team/" + lang}
          className={page === "team" ? "active-page" : ""}
        >
          <p> {lang === "fa" ? "تیم ما" : "Team"}</p>
        </Link>
        <Link
          to={"/ventilator/documents/" + lang}
          className={page === "documents" ? "active-page" : ""}
        >
          <p> {lang === "fa" ? "مستندات" : "Documents"}</p>
        </Link>
        <Link
          to={"/ventilator/links/" + lang}
          className={page === "links" ? "active-page" : ""}
        >
          <p> {lang === "fa" ? "لینک ها" : "Links"}</p>
        </Link>
        <Link
          to={"/ventilator/news/" + lang}
          className={page === "news" ? "active-page" : ""}
        >
          <p> {lang === "fa" ? "اخبار" : "News"}</p>
        </Link>
        <Link
          to={"/ventilator/standards/" + lang}
          className={page === "standards" ? "active-page" : ""}
        >
          <p> {lang === "fa" ? "استانداردها" : "Standards"}</p>
        </Link>
        <button
          className="changeLang-btn"
          onClick={this.setLang.bind(this, lang)}
        >
          fa/en
        </button>
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
    const page = this.props.page;

    return (
      <div id="horizontal-navbar" className={"horizontal-navbar-" + lang}>
        <div className="navbar-logo">
          <img src={AUFLOGO} alt="logo" className="navbar-logo-img-regtangle" />
          <img
            src={lang === "fa" ? FALOGO : ENLOGO}
            alt="logo"
            className="navbar-logo-img"
          />
          <p className="navbar-logo-text">
            {lang === "fa" ? "ونتیلاتور" : "Ventilator"}
          </p>
        </div>
        <div className="navbar-links">
          <Link to={"/" + lang}>
            <p>{lang === "fa" ? "صفحه اصلی" : "Main Page"}</p>
          </Link>
          <Link
            to={"/ventilator/" + lang}
            className={page === "home" ? "active-page" : ""}
          >
            <p>{lang === "fa" ? "خانه" : "Home"}</p>
          </Link>
          <Link
            to={"/ventilator/team/" + lang}
            className={page === "team" ? "active-page" : ""}
          >
            <p>{lang === "fa" ? "تیم ما" : "Team"}</p>
          </Link>
          <Link
            to={"/ventilator/documents/" + lang}
            className={page === "documents" ? "active-page" : ""}
          >
            <p>{lang === "fa" ? "مستندات" : "Documents"}</p>
          </Link>
          <Link
            to={"/ventilator/links/" + lang}
            className={page === "links" ? "active-page" : ""}
          >
            <p>{lang === "fa" ? "لینک ها" : "Links"}</p>
          </Link>
          <Link
            to={"/ventilator/news/" + lang}
            className={page === "news" ? "active-page" : ""}
          >
            <p>{lang === "fa" ? "اخبار" : "News"}</p>
          </Link>
          <Link
            to={"/ventilator/standards/" + lang}
            className={page === "standards" ? "active-page" : ""}
          >
            <p>{lang === "fa" ? "استانداردها" : "Standards"}</p>
          </Link>
          <button
            className="changeLang-btn"
            onClick={this.setLang.bind(this, lang)}
          >
            fa/en
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;
