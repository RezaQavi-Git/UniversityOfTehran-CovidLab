import React from "react";

import Footer from "../../common/footer/Footer";
import Navbar from "../common/header/Navbar";

import "./standards.css";

import $ from "jquery";
import PDF from "../../static/standards/standards.pdf";

import pic1 from "../../static/standards/1.jpg";
import pic2 from "../../static/standards/2.jpg";
import pic3 from "../../static/standards/3.jpg";

import { Slide } from "react-slideshow-image";

const slideImages = [pic1, pic2, pic3];

class Standards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {
      lang,
      match: { params },
    } = this.props;
    const title = lang === "fa" ? "استاندارد ها" : "Standards";
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
        <div className="main">
          <Navbar lang={lang} page="standards" />
          <p className="seprator">
            {lang === "fa" ? "استاندارد ها" : "Standards"}
          </p>
          <StandardsBody lang={lang} />
          <p className="seprator"></p>
          <Footer lang={lang} />
        </div>
      </React.Fragment>
    );
  }
}

class StandardsBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  do() {}
  render() {
    const lang = this.props.lang;
    return (
      <React.Fragment>
        <div className="standards-body">
          <p>{lang === "fa" ? "" : ""}</p>
          <div>
            <div className="standard-slide-container">
              <Slide>
                <div className="standard-each-slide">
                  <div
                    style={{ backgroundImage: `url(${slideImages[0]})` }}
                  ></div>
                </div>
                <div className="standard-each-slide">
                  <div
                    style={{ backgroundImage: `url(${slideImages[1]})` }}
                  ></div>
                </div>
                <div className="standard-each-slide">
                  <div
                    style={{ backgroundImage: `url(${slideImages[2]})` }}
                  ></div>
                </div>
              </Slide>
            </div>
            <div className="download-link">
              <p>
                {lang === "fa"
                  ? "برای دریافت کامل مقاله روی لینک زیر کلیک کنید."
                  : "Click on the link below to download the full article."}
              </p>
              <a href={PDF} download>
                {lang === "fa" ? "دانلود" : "Download"}
              </a>
            </div>
          </div>
          <p>
            An overview of FDA’s activities regarding medical devices is found
            <a href="https://www.fda.gov/medical-devices">here</a>. COVID-19
            related guidance documents can be found
            <a href="https://www.fda.gov/emergency-preparedness-and-response/coronavirus-disease-2019-covid-19/covid-19-related-guidance-documents-industry-fda-staff-and-other-stakeholders">
              here
            </a>
            .
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Standards;
