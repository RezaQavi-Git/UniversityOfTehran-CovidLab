import React from "react";
import { Link } from "react-router-dom";

import "./title.css";

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const lang = this.props.lang;
    return (
      <React.Fragment>
        <div className="title">
          <div className="title-head">
            <p>
              {lang === "fa"
                ? "تشخیص کووید 19 از روی صدای سرفه"
                : "Detection of Covid 19 by coughing sound"}
            </p>
          </div>
          <div className="title-description">
            <p>
              {lang === "fa"
                ? "یزد- ایرنا- سخنگوی دانشگاه علوم پزشکی شهید صدوقی یزد گفت: هم‌اکنون ۸۱۱ نفر به دلیل ابتلا به بیماری کووید ۱۹ در بیمارستان های استان بستری هستند که از این تعداد به ۱۳۶ نفر در بخش مراقبت‌های ویژه آی .سی.یو( I.C.U) خدمات درمانی ارایه می‌شود."
                : "Yazd - IRNA - The spokesman of Shahid Sadoughi University of Medical Sciences in Yazd said: Currently, 811 people are hospitalized in the province due to Covid 19 disease, of which 136 people are in the ICU intensive care unit of medical services. Is presented."}
            </p>
          </div>
        </div>
        <br/>
        <div className="title-button">
          <a className="title-team-button" href={"/#team"}>
            {lang === "fa" ? "تیم ما" : "Team"}
          </a>
          <a className="title-about-button" href={"/#about"}>
            {lang === "fa" ? "درباره ی ما" : "About"}
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Title;
