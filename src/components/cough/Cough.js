import React from "react";

import $ from "jquery";

import Footer from "../common/footer/Footer";
import Language from "../common/header/Language";

import Title from "../common/cough/title/Title";

import "../common/total-page.css";
import Navbar from "../common/header/Navbar";

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
          <Navbar lang={lang} />
          <p className="seprator"></p>
          <Title lang={lang} />
          <Footer lang={lang} />
        </div>
      </React.Fragment>
    );
  }
}

export default Cough;
