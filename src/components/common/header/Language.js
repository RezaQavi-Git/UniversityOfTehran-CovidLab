import React from "react";

import "../total-page.css";

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
    if (lang === "fa") {
      return (
        <div className="lang-button-en">
          <a
            href={
              url === "/en"
                ? "/fa"
                : url === "/record/fa"
                ? "/record/en"
                : url === "/team/fa"
                ? "/team/en"
                : url === "/projects/fa"
                ? "/projects/en"
                : url === "/news/fa"
                ? "/news/en"
                : "/about/en"
            }
          >
            <img src={en_img} alt="presian-lang" className="lang-img" />
          </a>
        </div>
      );
    } else {
      return (
        <div className="lang-button">
          <a
            href={
              url === "/fa"
                ? "/en"
                : url === "/record/en"
                ? "/record/fa"
                : url === "/team/en"
                ? "/team/fa"
                : url === "/projects/en"
                ? "/projects/fa"
                : url === "/news/en"
                ? "/news/fa"
                : "/about/fa"
            }
          >
            <img src={fa_img} alt="english-lang" className="lang-img" />
          </a>
        </div>
      );
    }
  }
}

export default Language;
