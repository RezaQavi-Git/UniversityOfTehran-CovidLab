import React from "react";

import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import Language from "../../common/header/Language";

import Title from "../../common/cough/title/Title";
import RecordBox from "../../common/cough/record-box/RecordBox";
import Team from "../../common/cough/team/Team";
import About from "../../common/cough/about/About";

import "../../common/total-page.css";

class Cough extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.title = "cough";
  }

  render() {
    return (
      <React.Fragment>
        <Language lang="fa" url="/" />
        <div className="main">
          <Header lang="fa" />
          <Title lang="fa" />
          <p className="seprator">توضیحات</p>
          <RecordBox lang="fa" />
          <p id="team" className="seprator">
            تیم ما
          </p>
          <Team lang="fa" />
          <p id="about" className="seprator">
            درباره ی ما
          </p>
          <About lang="fa" />
          <Footer lang="fa" />
        </div>
      </React.Fragment>
    );
  }
}

export default Cough;
