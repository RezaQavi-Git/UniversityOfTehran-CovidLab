import React from "react";

import $ from "jquery";

import "../components/common/total-page.css";
import "./ventilator.css";

import VentilatorImg from "../components/static/images/ventilator.jpg";

import Header from "../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";
import Language from "../components/common/header/Language";

class Ventilator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { lang, params } = this.props;

    const dir = lang === "fa" ? "rtl" : "ltr";
    const title = lang === "fa" ? "ونتیلاتور" : "ventilator";

    $("body").attr("dir", dir);
    document.title = title;
  }

  render() {
    const { lang, params } = this.props;

    return (
      <React.Fragment>
        <Language lang={lang} url={"/ve" + lang} />
        <div className="main">
          <Header lang={lang} />
          <Description lang={lang} />
          <p className="seprator"></p>
          <Footer lang={lang} />
        </div>
      </React.Fragment>
    );
  }
}

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const lang = this.props.lang;

    return (
      <React.Fragment>
        <div>
          <p className="seprator">
            {lang === "fa" ? "معرفی" : "Introduction"}
          </p>
          <Introduction lang={lang} />
          <p className="seprator">
            {lang === "fa" ? "نیازمندی ها" : "Requirements"}
          </p>
          <Need lang={lang} />
          <p className="seprator">
            {lang === "fa" ? "تحقیقات" : "Research"}
          </p>
          <Research lang={lang} />
          <p className="seprator">
            {lang === "fa" ? "شرایط استفاده" : "Term of Use"}
          </p>
          <TermOfUse lang={lang} />
          <p className="seprator">
            {lang === "fa" ? "پشتیبانی" : "Support"}
          </p>
          <Support lang={lang} />
          <p className="seprator">{lang === "fa" ? "منابع" : "Resources"}</p>
          <Resources lang={lang} />
        </div>
      </React.Fragment>
    );
  }
}

class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const lang = this.props.lang;
    return (
      <React.Fragment>
        <div className="intro">
          <img src={VentilatorImg} alt="ونتیلاتور" className="intro-img"></img>
          <p className="img-title ">{lang==="fa" ? "دستگاه ونتیلاتور مدل فلان<" : "Ventilator device of a certain model" }</p>
          <p className="description">
            {lang === "fa"
              ? "ونتیلاتور یا دستگاه تنفس مصنوعی، دستگاهی است که با توجه به شرایط بیمار به عمل تنفس کمک می کند و یا برای بیمارانی که قادر به ونتیلاتور یا دستگاه تنفس مصنوعی، دستگاهی است که با توجه به شرایط بیمار به عمل تنفس کمک می کند و یا برای بیمارانی که قادر به"
              : "A ventilator, or ventilator, is a device that helps with breathing depending on the patient's condition or for patients who are able to A ventilator, or ventilator, is a device that helps with breathing depending on the patient's condition or for patients who are able to A ventilator, or ventilator, is a device that helps with breathing depending on the patient's condition or for patients who are able to"}
          </p>
        </div>
      </React.Fragment>
    );
  }
}

class Need extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const lang = this.props.lang;
    
    return (
      <React.Fragment>
        <p className="description">
        {lang === "fa"
              ? "ونتیلاتور یا دستگاه تنفس مصنوعی، دستگاهی است که با توجه به شرایط بیمار به عمل تنفس کمک می کند و یا برای بیمارانی که قادر به ونتیلاتور یا دستگاه تنفس مصنوعی، دستگاهی است که با توجه به شرایط بیمار به عمل تنفس کمک می کند و یا برای بیمارانی که قادر به"
              : "A ventilator, or ventilator, is a device that helps with breathing depending on the patient's condition or for patients who are able to A ventilator, or ventilator, is a device that helps with breathing depending on the patient's condition or for patients who are able to A ventilator, or ventilator, is a device that helps with breathing depending on the patient's condition or for patients who are able to"}
        </p>
      </React.Fragment>
    );
  }
}

class Research extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const lang = this.props.lang;

    return (
      <React.Fragment>
        <p className="description">
        {lang === "fa"
              ? "ونتیلاتور یا دستگاه تنفس مصنوعی، دستگاهی است که با توجه به شرایط بیمار به عمل تنفس کمک می کند و یا برای بیمارانی که قادر به ونتیلاتور یا دستگاه تنفس مصنوعی، دستگاهی است که با توجه به شرایط بیمار به عمل تنفس کمک می کند و یا برای بیمارانی که قادر به"
              : "A ventilator, or ventilator, is a device that helps with breathing depending on the patient's condition or for patients who are able to A ventilator, or ventilator, is a device that helps with breathing depending on the patient's condition or for patients who are able to A ventilator, or ventilator, is a device that helps with breathing depending on the patient's condition or for patients who are able to"}
        </p>
      </React.Fragment>
    );
  }
}

class Resources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const lang = this.props.lang;

    return (
      <React.Fragment>
        <p className="description">
        {lang === "fa"
              ? "ونتیلاتور یا دستگاه تنفس مصنوعی، دستگاهی است که با توجه به شرایط بیمار به عمل تنفس کمک می کند و یا برای بیمارانی که قادر به ونتیلاتور یا دستگاه تنفس مصنوعی، دستگاهی است که با توجه به شرایط بیمار به عمل تنفس کمک می کند و یا برای بیمارانی که قادر به"
              : "A ventilator, or ventilator, is a device that helps with breathing depending on the patient's condition or for patients who are able to A ventilator, or ventilator, is a device that helps with breathing depending on the patient's condition or for patients who are able to A ventilator, or ventilator, is a device that helps with breathing depending on the patient's condition or for patients who are able to"}
        </p>
      </React.Fragment>
    );
  }
}

class Support extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const lang = this.props.lang;

    return (
      <React.Fragment>
        <p className="description">
          {lang === "fa"
              ? "ونتیلاتور یا دستگاه تنفس مصنوعی، دستگاهی است که با توجه به شرایط بیمار به عمل تنفس کمک می کند و یا برای بیمارانی که قادر به ونتیلاتور یا دستگاه تنفس مصنوعی، دستگاهی است که با توجه به شرایط بیمار به عمل تنفس کمک می کند و یا برای بیمارانی که قادر به"
              : "A ventilator, or ventilator, is a device that helps with breathing depending on the patient's condition or for patients who are able to A ventilator, or ventilator, is a device that helps with breathing depending on the patient's condition or for patients who are able to A ventilator, or ventilator, is a device that helps with breathing depending on the patient's condition or for patients who are able to"}
        </p>
      </React.Fragment>
    );
  }
}

class TermOfUse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const lang = this.props.lang;

    return (
      <React.Fragment>
        <p className="description">
        {lang === "fa"
              ? "ونتیلاتور یا دستگاه تنفس مصنوعی، دستگاهی است که با توجه به شرایط بیمار به عمل تنفس کمک می کند و یا برای بیمارانی که قادر به ونتیلاتور یا دستگاه تنفس مصنوعی، دستگاهی است که با توجه به شرایط بیمار به عمل تنفس کمک می کند و یا برای بیمارانی که قادر به"
              : "A ventilator, or ventilator, is a device that helps with breathing depending on the patient's condition or for patients who are able to A ventilator, or ventilator, is a device that helps with breathing depending on the patient's condition or for patients who are able to A ventilator, or ventilator, is a device that helps with breathing depending on the patient's condition or for patients who are able to"}
        </p>
      </React.Fragment>
    );
  }
}

export default Ventilator;
