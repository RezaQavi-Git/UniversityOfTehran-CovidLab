import React from "react";
import { Link } from "react-router-dom";

import FALOGO from "../../../static/images/fa-lab-logo.png";
import ENLOGO from "../../../static/images/en-lab-logo.png";

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
        <HorizontalNavbar lang={lang} page={page}/>
        <VerticalNavbar id="vertical-navbar" lang={lang} page={page}/>
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
        <Link to={"/" + lang}><p>{lang === "fa" ? "صفحه اصلی" : "Main Page"}</p></Link>
        <Link to={"/cough/" + lang} className={page==="home" ? "active-page": ""}><p>{lang === "fa" ? "خانه" : "Home"}</p></Link>
        <Link to={"/cough/team/" + lang} className={page==="team" ? "active-page": ""}>
          <p>{lang === "fa" ? "تیم ما" : "Team"}
        </p></Link>
        <Link to={"/cough/record/" + lang} className={page==="record" ? "active-page": ""}>
          <p>{lang === "fa" ? "ضبط صدا" : "Record"}
        </p></Link>
        <Link to={"/cough/news/" + lang} className={page==="news" ? "active-page": ""}>
          <p>{lang === "fa" ? "اخبار" : "News"}
        </p></Link>
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
    console.log(page);
    return (
      <div id="horizontal-navbar" className={"horizontal-navbar-" + lang}>
        <div className="navbar-logo">
          <img
            src={lang === "fa" ? FALOGO : ENLOGO}
            alt="logo"
            className="navbar-logo-img"
          />
          <p className="navbar-logo-text">
            {lang === "fa"
              ? "تشخیص بیماری کووید 19 با استفاده از صدای سرفه"
              : "Detection of COVID 19 by Sound of Cough"}
          </p>
        </div>
        <div className="navbar-links">
          <Link to={"/" + lang}>
            <p>{lang === "fa" ? "صفحه اصلی" : "Main Page"}
          </p></Link>
          <Link to={"/cough/" + lang} className={page==="home" ? "active-page": ""}><p>{lang === "fa" ? "خانه" : "Home"}</p></Link>
          <Link to={"/cough/team/" + lang} className={page==="team" ? "active-page": ""}>
            <p>{lang === "fa" ? "تیم ما" : "Team"}
          </p></Link>
          <Link to={"/cough/record/" + lang} className={page==="record" ? "active-page": ""}>
            <p>{lang === "fa" ? "ضبط صدا" : "Record"}
          </p></Link>
          <Link to={"/cough/news/" + lang} className={page==="news" ? "active-page": ""}>
            <p>{lang === "fa" ? "اخبار" : "News"}
          </p></Link>
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
