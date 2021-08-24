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
              url === "/cough/fa"
                ? "/cough/en"
                : (url === "/cough/record/fa")
                ? "/cough/record/en"
                : (url === "/cough/team/fa")
                ? "/cough/team/en"
                : (url === "/cough/projects/fa")
                ? "/cough/projects/en"
                : (url === "/cough/news/fa")
                ? "/cough/news/en"
                : "/cough/about/en"
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
              url === "/cough/en"
                ? "/cough/fa"
                : url === "/cough/record/en"
                ? "/cough/record/fa"
                : url === "/cough/team/en"
                ? "/cough/team/fa"
                : url === "/cough/projects/en"
                ? "/cough/projects/fa"
                : url === "/cough/news/en"
                ? "/cough/news/fa"
                : "/cough/about/fa"
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
