import React from "react";

import $ from "jquery";

import Footer from "../common/footer/Footer";
import Language from "../cough/common/header/Language";

import "./main.css";

import MAINPIC from "../static/images/ai-robot.png";
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

  render() {
    const {
      lang,
      match: { params },
    } = this.props;
    return (
      <React.Fragment>
        <Language lang={lang} url={"/cough/" + lang} />
        <div className="main-body-top">
          <div className="main-body-text">
            <div className="main-body-logo">
              <img
                src={UTLOGO}
                alt="University of Tehran"
                className="main-body-logo-img"
              ></img>
              <div className="main-body-logo-text">
                <p style={{fontFamily: "Titrbold"}}>
                  {lang === "fa" ? "دانشگاه تهران" : "University of Tehran"}
                </p>
                <p  style={{fontFamily: "Titrbold"}}>
                  {lang === "fa"
                    ? "دانشکده ی برق و کامپیوتر"
                    : "School of Electrical & Computer Engineering"}
                </p>
              </div>
            </div>

            <p className="main-body-text-title">
              {lang === "fa" ? "آزمایشگاه کووید" : "COVID LAB"}
            </p>
            <p className="main-body-text-description">
              {lang === "fa"
                ? "گروه یادگیری ماشین و رباتیک (MLRG) به آموزش و تحقیق در زمینه رباتیک و سیستم های هوشمند اختصاص داده شده است. این برنامه به دنبال آماده سازی دانش آموزان برای حرفه ای صنعتی در رباتیک ، اتوماسیون و سیستم های هوشمند است. همچنین دانشجویانی را که مایل به تحصیل و تحقیقات پیشرفته هستند منجر به دکترا می شود. این آزمایشگاه در زمینه رباتیک و یادگیری ماشین را در مقطع کارشناسی ارشد و دکتری ارائه می دهد. "
                : "Machine Learning and Robatics Group (MLRG) is dedicated to teaching and research in Robotics and Intelligent Systems. The program seeks to prepare the students for an industrial career in robotics, automation and intelligent systems. It also prepares the students who wish to pursue advanced studies and research leading to a Ph.D. It offers both master degree and Ph.D. in Robotics and Machine Learning."}
            </p>
          </div>
        </div>
        <div className="main-body-bottom">
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
                  href={"/#/cough/" + lang}
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
                  ? " هوش مصنوعیمصنوعیمصنوعیمصنوعی مصنوعیمصنوعی"
                  : " sound using AI sound using AI sound using AI"}
              </p>
              <p className="link-href">
                <a
                  href={"/#/ventilator/" + lang}
                  className="link-href"
                >
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
