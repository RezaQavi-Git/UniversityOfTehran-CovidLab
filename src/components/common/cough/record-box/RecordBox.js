import React from "react";
import { Link } from "react-router-dom";

import Microphone from "../../../static/images/record.png";

import "./record-box.css";

class RecordBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const lang = this.props.lang;
    if (lang === "fa") {
      return (
        <React.Fragment>
          <div className="description-box">
            <div className="description-box-description">
              <p>
                یزد با یک میلیون و ۲۰۰ هزار نفر جمعیت ،۱۰ شهرستان دارد، با توجه
                به اظهارات سخنگوی دانشگاه یادشده روند سرعت انتشار ویروس کرونا که
                عامل بیماری کووید ۱۹ است، در استان رو به افزایش است. هم اکنون
                وضعیت بهداشتی ۹ شهرستان از ۱۰ شهرستان استان یزد، به دلیل افزایش
                شیوع ویروس کرونا در حالت قرمز قرار دارد و تنها شهرستان اشکذر به
                رنگ نارنجی است . به گزارش ایرنا، ویروس کرونا عامل بیماری کووید
                ۱۹ از اواخر سال ۲۰۱۹ در شهر ووهان چین مشاهده و در مدت کوتاهی در
                جهان منتشر شد؛ به طوری که سازمان جهانی بهداشت در اسفند ۹۸ (فوریه
                ۲۰۲۰) بروز پاندمی (همه‌ گیری جهانی) این بیماری را تأیید کرونا
                این ویروس با دست آلوده یا عطسه، سرفه و حتی قطره های تنفسی از
                طریق دهان، بینی و چشم به افراد منتقل می‌شود. تنگی نفس، خستگی و
                بدن درد، اختلال در بویایی و چشایی و مشکلات گوارشی از جمله علایم
                بیماری کووید ۱۹ است و بیش از ۸۰ درصد مبتلایان به ویروس نیز دچار
                بیماری خفیف می‌شوند.
              </p>
            </div>
            <div className="description-box-record">
              <Link to="/record">
                {" "}
                <img src={Microphone} className="microphone" alt="mic" />{" "}
              </Link>
              <p>ضبط صدا</p>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="description-box">
            <div className="description-box-record">
              <Link to="/record/en">
                {" "}
                <img src={Microphone} className="microphone" alt="mic" />{" "}
              </Link>
              <p>Record Voice</p>
            </div>
            <div className="description-box-description">
              <p className="en">
                Yazd, with a population of 1.2 million, has 10 cities. According
                to the university spokesman, the trend of spreading the corona
                virus, which causes Covid 19 disease, is increasing in the
                province. Currently, the health status of 9 out of 10 cities in
                Yazd province is in red due to the increase in the prevalence of
                coronavirus, and only Ashkzar city is orange. According to IRNA,
                the coronavirus, which causes Covid 19 disease, has been
                observed in Wuhan, China since late 2019 and was spread around
                the world in a short time; So that the World Health Organization
                in March (February 2020) confirmed the outbreak of a pandemic
                (global epidemic) of this disease Corona The virus is
                transmitted to infected people through infected hands or
                sneezing, coughing and even respiratory drops through the mouth,
                nose and eyes. Shortness of breath, fatigue and body aches,
                olfactory and taste disturbances, and gastrointestinal problems
                are some of the symptoms of Covid 19 disease, and more than 80%
                of those infected with the virus also develop a mild illness.
              </p>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default RecordBox;
