import React from "react";

import Footer from "../common/footer/Footer";
import CoughRecord from "./CoughRecord";
import Language from "../common/header/Language";

import "../common/total-page.css";

import $ from "jquery";
import Navbar from "../common/header/Navbar";

class Record extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {
      lang,
      match: { params },
    } = this.props;
    const title = lang === "fa" ? "ضبط صدای سرفه" : "Record Voice";
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
        <Language lang={lang} url={"/record/" + lang} />
        <div className="main">
          <Navbar lang={lang} />
          <p className="seprator"></p>
          <CoughRecord lang={lang} />
          <p className="seprator"></p>
          <Footer lang={lang} />
        </div>
      </React.Fragment>
    );
  }
}

export default Record;
