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
          <Navbar lang={lang} page="news"/>
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
                ? "دعوت برای مشارکت در طرح پژوهشی تشخیص کرونا از روی سرفه"
                : "Invitation to participate in a research project on the diagnosis of coronary heart disease"}
            </p>
            <p className="news-box-description">
              {lang === "fa"
                ? "سرپرست پروژه تشخیص مبتلایان به کرونا از طریق سرفه با بیان این‌که با مشارکت مبتلایان و افراد سالم در جمع‌آوری داده‌ها می‌توان به نتایج مطلوب‌تری دست یافت، گفت: هم‌اکنون به علت ناکافی بودن اطلاعات اولیه نمی‌توان نتایج نهایی و قطعی را اعلام کرد"
                : "The head of the project for the diagnosis of coronary heart disease through cough, stating that with the participation of patients and healthy people in data collection, better results can be achieved, said:"}
            </p>
            <a
              href="https://www.isna.ir/news/99122518792/%D8%AF%D8%B9%D9%88%D8%AA-%D8%A8%D8%B1%D8%A7%DB%8C-%D9%85%D8%B4%D8%A7%D8%B1%DA%A9%D8%AA-%D8%AF%D8%B1-%D8%B7%D8%B1%D8%AD-%D9%BE%DA%98%D9%88%D9%87%D8%B4%DB%8C-%D8%AA%D8%B4%D8%AE%DB%8C%D8%B5-%DA%A9%D8%B1%D9%88%D9%86%D8%A7-%D8%A7%D8%B2-%D8%B1%D9%88%DB%8C-%D8%B3%D8%B1%D9%81%D9%87"
              className="news-box-link"
            >{lang==="fa"? "ادامه مطلب" : "Read more" }</a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default News;
