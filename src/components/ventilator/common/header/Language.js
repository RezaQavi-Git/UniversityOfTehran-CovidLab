import React from "react";

import "../total-page.css";

import fa_img from "../../../static/images/fa-lang.png";
import en_img from "../../../static/images/en-lang.png";

class Language extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const lang = this.props.lang;
    const url = this.props.url;
    console.log(lang);

    console.log(url);
    if (lang === "fa") {
      return (
        <div className="lang-button-en">
          <a
            href={
              url === "/ventilator/fa"
                ? "/ventilator/en"
                : (url === "/ventilator/documents/fa")
                ? "/ventilator/documents/en"
                : (url === "/ventilator/team/fa")
                ? "/ventilator/team/en"
                : (url === "/ventilator/links/fa")
                ? "/ventilator/links/en"
                : (url === "/ventilator/news/fa")
                ? "/ventilator/news/en"
                : "/ventilator/standards/en"
            }
          >
            <img src={en_img} alt="english-lang" className="lang-img" />
          </a>
        </div>
      );
    } else {
      return (
        <div className="lang-button">
          <a
            href={
              url === "/ventilator/en"
                ? "/ventilator/fa"
                : url === "/ventilator/documents/en"
                ? "/ventilator/documents/fa"
                : url === "/ventilator/team/en"
                ? "/ventilator/team/fa"
                : url === "/ventilator/links/en"
                ? "/ventilator/links/fa"
                : url === "/ventilator/news/en"
                ? "/ventilator/news/fa"
                : "/ventilator/standards/fa"
            }
          >
            <img src={fa_img} alt="persian-lang" className="lang-img" />
          </a>
        </div>
      );
    }
  }
}

export default Language;
