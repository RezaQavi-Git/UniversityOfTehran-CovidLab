import React from "react";

import "../total-page.css";
import { Link } from "react-router-dom";

import fa_img from "../../static/images/fa-lang.png";
import en_img from "../../static/images/en-lang.png";

class Language extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const lang = this.props.lang;
    const url = this.props.url;
    if (lang === "en") {
      return (
        <div className="lang-button-en">
          <a href={url === "/en" ? "/fa" : "/record/fa"}>
            <img src={fa_img} alt="presian-lang" className="lang-img" />
          </a>
        </div>
      );
    } else {
      return (
        <div className="lang-button">
          <a href={url === "/fa" ? "/en" : "/record/en"}>
            <img src={en_img} alt="english-lang" className="lang-img" />
          </a>
        </div>
      );
    }
  }
}

export default Language;
