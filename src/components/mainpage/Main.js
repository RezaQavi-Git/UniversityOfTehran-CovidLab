import React from "react";

import $ from "jquery";

import Footer from "../common/footer/Footer";

import "./main.css";

import UTLOGO from "../static/images/ut-logo.png";
import RSSD from "../static/images/rssd.png";
import SINACARE from "../static/images/sinacare.png";
import COUGH from "../static/images/cough-sound.png";
import VENTILATOR from "../static/images/ventilator.png";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {
      lang,
      match: { params },
    } = this.props;
    const title = lang === "fa" ? "صفحه اصلی" : "Main page";
    const dir = lang === "fa" ? "rtl" : "ltr";

    document.title = title;
    $("body").attr("dir", dir);
  }

  setLang(lang) {
    var path = window.location.pathname;
    path = path.slice(0, path.length - 2);
    lang === "fa"
      ? window.location.replace(path + "en")
      : window.location.replace(path + "fa");
  }
  
  render() {
    const {
      lang,
      match: { params },
    } = this.props;
    return (
      <React.Fragment>
        <div className="main-body-top">
        <button className="changeLang-btn"  onClick={this.setLang.bind(this, lang)}>fa/en</button>
          <div className="main-body-text">
            <div className="main-body-logo">
              <img
                src={UTLOGO}
                alt="University of Tehran"
                className="main-body-logo-img"
              ></img>
              <div className="main-body-logo-text">
                {/* <p>
                  {lang === "fa" ? "دانشگاه تهران" : "University of Tehran"}
                </p>
                <p>
                  {lang === "fa"
                    ? "دانشکده ی برق و کامپیوتر"
                    : "School of Electrical & Computer Engineering"}
                </p> */}
              </div>
            </div>
            <p className="main-body-text-title">
              {lang === "fa" ? "آزمایشگاه کووید" : "COVID LAB"}
            </p>
            <p className="main-body-text-description">
              {lang === "fa"
                ? "تلاش های زیادی در دانشگاه تهران برای مبارزه با کووید 19 انجام شده است. چندین فعالیت در اینجا ذکر شده است. "
                : "There are many efforts at the University of Tehran to fight COVID 19. Several activities have been listed here."}
            </p>
          </div>
        </div>
        <div className="main-body-bottom">
          <div className="main-body-links">
            <div className="main-body-link">
              <div className="link-img">
                <img src={COUGH} alt="folan" className="link-image"></img>
              </div>
              <p className="link-title">
                {lang === "fa"
                  ? "تشخیص COVID-19 از طریق صدای سرفه"
                  : "COVID-19 diagnosis via cough sound"}
              </p>
              <p className="link-description">
                {lang === "fa"
                  ? "تشخیص علائم COVID-19 از طریق صدای سرفه با استفاده از هوش مصنوعی"
                  : "Diagnosing COVID-19 symptoms from cough sound using AI"}
              </p>
              <p className="link-href">
                <a
                  href={"/cough/" + lang}
                  className="link-href"
                >
                  {lang === "fa" ? "ادامه مطلب" : "Read more"}
                </a>
              </p>
            </div>
            <div className="main-body-link">
              <div className="link-img">
                <img src={VENTILATOR} alt="folan" className="link-image"></img>
              </div>
              <p className="link-title">
                {lang === "fa" ? "ونتیلاتور" : "Ventilator"}
              </p>
              <p className="link-description">
                {lang === "fa"
                  ? "پروژه دستگاه تنفس مصنوعی برای مواقع اضطراری"
                  : "Artificial respiration project for emergencies"}
              </p>
              <p className="link-href">
                <a
                  href={"/ventilator/" + lang}
                  className="link-href"
                >
                  {lang === "fa" ? "ادامه مطلب" : "Read more"}
                </a>
              </p>
            </div>
          </div>
          <div className="main-body-links">
            <div className="main-body-link">
              <div className="link-img">
                <img src={RSSD} alt="folan" className="link-image"></img>
              </div>
              <p className="link-title">
                {lang === "fa"
                  ? "آشکارساز ROS در نمونه خلط (RDSS)"
                  : "ROS detector in the sputum sample (RDSS)"}
              </p>
              <p className="link-description">
                {lang === "fa"
                  ? "رونمایی از دستگاه تشخیص سریع بیماری التهابی حاد (COVID-19)"
                  : "The unveiling of the fast detection device for acute inflammatory disease (COVID-19)"}
              </p>
              <p className="link-href">
                <a
                  href="https://nanoelechealth.com/archives/243"
                  className="link-href"
                >
                  {lang === "fa" ? "ادامه مطلب" : "Read more"}
                </a>
              </p>
            </div>
            <div className="main-body-link">
              <div className="link-img">
                <img src={SINACARE} alt="folan" className="link-image"></img>
              </div>
              <p className="link-title">
                {lang === "fa" ? "SinaCare" : "SinaCare"}
              </p>
              <p className="link-description">
                {lang === "fa"
                  ? "یک پلت فرم آنلاین برای نظارت از راه دور بیماران مبتلا به کووید -19"
                  : "An online platform for remote monitoring of patients with Covid-19"}
              </p>
              <p className="link-href">
                <a href="https://www.sinacare.ir/covid/" className="link-href">
                  {lang === "fa" ? "ادامه مطلب" : "Read more"}
                </a>
              </p>
            </div>
          </div>
        </div>
        <Footer lang={lang} />
      </React.Fragment>
    );
  }
}

export default Main;
