import React from "react";

import $ from "jquery";

import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import Language from "../common/header/Language";

import Title from "../common/cough/title/Title";
import RecordBox from "../common/cough/record-box/RecordBox";
import Team from "../common/cough/team/Team";
import About from "../common/cough/about/About";

import "../common/total-page.css";

class Cough extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {
      lang,
      match: { params },
    } = this.props;
    const title = lang === "fa" ? "سرفه" : "cough";
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
        <Language lang={lang} url={"/" + lang} />
        <div className="main">
          <Header lang={lang} />
          <p className="seprator">
          </p>
          <Title lang={lang} />
          <p className="seprator">
            {lang === "fa" ? "توضیحات" : "Description"}
          </p>
          <RecordBox lang={lang} />
          <p id="team" className="seprator">
            {lang === "fa" ? "تیم ما" : "Team"}
          </p>
          <Team lang={lang} />
          <p id="about" className="seprator">
            {lang === "fa" ? "درباره ی ما" : "About"}
          </p>
          <About lang={lang} />
          <Footer lang={lang} />
        </div>
      </React.Fragment>
    );
  }
}

export default Cough;
