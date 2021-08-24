import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

import FALOGO from "../../../static/images/fa-lab-logo.png";
import ENLOGO from "../../../static/images/en-lab-logo.png";

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

  render() {
    const lang = this.props.lang;
    return (
      <div id="vertical-navbar" className={"vertical-navbar " + lang}>
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

  render() {
    const lang = this.props.lang;

    return (
      <div id="horizontal-navbar" className={"horizontal-navbar-" + lang}>
        <div className="navbar-logo">
          <img
            src={lang === "fa" ? FALOGO : ENLOGO}
            alt="logo"
            className="navbar-logo-img"
          />
          <p>
            {lang === "fa"
              ? "ونتیلاتور"
              : "Ventilator"}
          </p>
        </div>
        <div className="navbar-links">
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
        </div>
      </div>
    );
  }
}

export default Navbar;
