import React from "react";

import $ from "jquery";

import Footer from "../../common/footer/Footer";
import Navbar from "../common/header/Navbar";

import "./home.css";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import pic1 from "../../static/images/cough-record.png";
import pic2 from "../../static/images/cough-sound.png";

const slideImages = [pic2, pic1, pic2];

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
    const title = lang === "fa" ? "سرفه" : "cough";
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
          <Navbar lang={lang} page="home"/>
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
        <div className="cough-body">
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
              <div className="each-slide">
                <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
                  {/* <span>Slide 3</span> */}
                </div>
              </div>
            </Slide>
          </div>
          <div className="cough-body-description">
            <div className="cough-body-box">
              {/* <div className="cough-body-box-img">
                <img src={pic2} alt="record" className="box-img" />
              </div> */}
              <div className="cough-body-box-txt">
                <p>
                  {lang === "fa"
                    ? "ویروس کرونا دوره نهفتگی بین 1 روز تا دو هفته را دارد که باعث میگردد به راحتی بین افراد شیوع پیدا کند. از سوی دیگر، تشخیص آن در این دوره نهفتگی به سادگی نبوده و هزینه بر میباشد. لذا طراحی و ساخت سیستمهای هوشمند جهت غربالگری اولیه، همانند تشخیص از صدای سرفه افراد، میتواند کمک بسزایی در جهت جلوگیری از شیوع این بیماری با ایجاد آگاهی در افراد بنماید. این سایت، تحقیقات مربوط به غربالگری کوید 19 از طریق پردازش صدای سرفه کاربران راه اندازی شده است. در این سامانه شما میتوانید به غربالگری اولیه خود پرداخته و در صورت نیاز خودقرنطینگی انجام داده یا به مراکز بهداشتی مراجعه نمایید."
                    : "The corona virus has a latency period of one day to two weeks, which makes it easily spread between people. On the other hand, it is not easy to diagnose in this period of latency and it is costly. Therefore, designing and building intelligent systems for initial screening, such as detecting the sound of people coughing, can help a lot to prevent the spread of this disease by creating awareness in people. This site launches research on Covid 19 screening through user's cough processing. In this system, you can do your initial screening and, if necessary, perform self-cornealization or refer to health centers."}
                </p>
                <a href={"app/cough/record/" + lang}>{lang === "fa" ? "ضبط صدا" : "Record Voice"}</a>
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
