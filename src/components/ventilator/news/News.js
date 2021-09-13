import React from "react";

import Footer from "../../common/footer/Footer";
import Navbar from "../common/header/Navbar";

import "../../common/news.css";

import $ from "jquery";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {
      lang,
      match: { params },
    } = this.props;
    const title = lang === "fa" ? "اخبار" : "News";
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
          <Navbar lang={lang} />
          <p className="seprator">{lang === "fa" ? "اخبار" : "News"}</p>
          <NewsBody lang={lang} />
          <p className="seprator"></p>
          <Footer lang={lang} />
        </div>
      </React.Fragment>
    );
  }
}

class NewsBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const lang = this.props.lang;
    return (
      <React.Fragment>
        <div className="news-body">
          <div className="news-box">
            <p className="news-box-title">
              {lang === "fa"
                ? "مهندسان ایرانی تهویه منبع باز را توسعه می دهند"
                : "Iranian Engineers Develop Open Source Ventilator"}
            </p>
            <p className="news-box-description">
              {lang === "fa"
                ? "هادی مرادی ، دانشیار دانشکده مهندسی برق و کامپیوتر دانشگاه تهران ، در تلاش است تا یک دستگاه تنفس باز منبع باز برای بیماران مبتلا به COVID-19 ایجاد کند."
                : "Hadi Moradi, an associate professor at the University of Tehran’s School of Electrical & Computer Engineering, is working to develop an open source ventilator for patients who have COVID-19."}
            </p>
            <a
              href="https://spectrum.ieee.org/engineers-iran-open-source-ventilator"
              className="news-box-link"
            >{lang==="fa"? "ادامه مطلب" : "Read more" }</a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default News;
