import React from "react";

import $ from "jquery";

import Footer from "../../common/footer/Footer";
import Navbar from "../common/header/Navbar";

import "./home.css";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import pic2 from "../../static/images/ventilator-slide.png";

const slideImages = [pic2, pic2];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {
      lang,
      match: { params },
    } = this.props;
    const title = lang === "fa" ? "ونتیلاتور" : "Ventilator";
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
          {/* <p className="seprator"></p> */}
          <HomeBody lang={lang} />
          <Footer lang={lang} />
        </div>
      </React.Fragment>
    );
  }
}

class HomeBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const lang = this.props.lang;
    return (
      <React.Fragment>
        <div className="ventilator-body">
          <div className="slide-container">
            <Slide>
              <div className="each-slide">
                <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
                  {/* <span>Slide 1</span> */}
                </div>
              </div>
              <div className="each-slide">
                <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
                  {/* <span>Slide 2</span> */}
                </div>
              </div>
              {/* <div className="each-slide">
                <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
                  <span>Slide 3</span>
                </div>
              </div> */}
            </Slide>
          </div>

          {/* <div className="ventilator-body-head">
            <p>
              {lang === "fa"
                ? "درباره ی ونتیلاتور"
                : "About Ventilator"}
            </p>
          </div> */}
          <div className="ventilator-body-description">
            <div className="ventilator-body-box">
              <div className="ventilator-body-box-img">
                <img src={pic2} alt="ventilator" className="box-img" />
              </div>
              <div className="ventilator-body-box-txt">
                <p>
                  {lang === "fa"
                    ? "این پروژه در جهت طراحی و ساخت یک دستگاه آمبو اتوماتیک یا دستگاه تنفس مصنوعی (Respirator) جهت استفاده در مواقع ضروری میباشد. طراحی اولیه دستگاه بر مبنای طراحی ای در دانشگاه ام آی تی (MIT) انجام گرفته است که با همکاری آن تیم، سیستم بهبود یافته است. دستگاه طوری طراحی گردیده است که بتوان از امکانات موجود در ایران استفاده کرده و بصورت محلی آنرا ساخت. لذا قرار است که دستگاه بصورت نسخه باز (Open source) ارائه گردد تا متخصصین دیگر هم بتوانند آنرا بسازند. دستگاه از آمبوهای موجود در بازار استفاده کرده و لذا میتوان به آن اکسیژن هم وصل نمود. دستگاه را میتوان با قابلیتهای مختلف تهیه نمود و در آینده هم میتوان برای استفاده در آمبولانس ها و اطاق های اورژانس هم استفاده گردد. "
                    : "This project is for the design and construction of an automatic ambo device or artificial respiration device (Respirator) for use in emergencies. The initial design of the device was based on a design at MIT, with which the system was improved. The device is designed to use the facilities available in Iran and build it locally. Therefore, the device is to be provided as an open source version so that other professionals can build it. The device uses ambo available in the market and therefore oxygen can be connected to it. The device can be provided with different capabilities and in the future can be used in ambulances and emergency rooms."}
                </p>
                <p>
                  {lang === "fa"
                    ? "این دستگاه با همکاری دانشکده مهندسی برق و کامپیوتر دانشگاه تهران، پژوهشکده پلیمر و پتروشیمی ایران، و شرکت دانش بنیان نوژان طراحی و ساخته شده است."
                    : "This device has been designed and manufactured in collaboration with the Faculty of Electrical and Computer Engineering, University of Tehran, Iran Polymer and Petrochemical Research Institute, and Nojan Knowledge-Based Company."}
                </p>
                {/* <a href={"/cough/record/" + lang}>{lang === "fa" ? "ضبط صدا" : "Record Voice"}</a> */}
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </React.Fragment>
    );
  }
}

export default Home;
