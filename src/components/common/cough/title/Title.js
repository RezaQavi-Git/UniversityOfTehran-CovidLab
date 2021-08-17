import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

import "./title.css";

const images = [
  { url: "https://wallpaperaccess.com/full/2329950.jpg" },
  { url: "https://wallpaperaccess.com/full/2329950.jpg" },
  { url: "https://wallpaperaccess.com/full/2329950.jpg" },
];
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
          <div>
            <SimpleImageSlider slideDuration={0.01} width={896} height={504} images={images} />
          </div>
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
                ? "ویروس کرونا دوره نهفتگی بین 1 روز تا دو هفته را دارد که باعث میگردد به راحتی بین افراد شیوع پیدا کند. از سوی دیگر، تشخیص آن در این دوره نهفتگی به سادگی نبوده و هزینه بر میباشد. لذا طراحی و ساخت سیستمهای هوشمند جهت غربالگری اولیه، همانند تشخیص از صدای سرفه افراد، میتواند کمک بسزایی در جهت جلوگیری از شیوع این بیماری با ایجاد آگاهی در افراد بنماید. این سایت، تحقیقات مربوط به غربالگری کوید 19 از طریق پردازش صدای سرفه کاربران راه اندازی شده است. در این سامانه شما میتوانید به غربالگری اولیه خود پرداخته و در صورت نیاز خودقرنطینگی انجام داده یا به مراکز بهداشتی مراجعه نمایید.( I.C.U) خدمات درمانی ارایه می‌شود."
                : "The corona virus has a latency period of one day to two weeks, which makes it easily spread between people. On the other hand, it is not easy to diagnose in this period of latency and it is costly. Therefore, designing and building intelligent systems for initial screening, such as detecting the sound of people coughing, can help to prevent the spread of this disease by creating awareness in people. This site launches research on Covid 19 screening through user's cough processing. In this system, you can do your initial screening and, if necessary, perform self-cornealization or refer to health centers."}
            </p>
          </div>
        </div>
        <br />
        <br />
        {/* <br/>
        <div className="title-button">
          <a className="title-team-button" href={"/#team"}>
            {lang === "fa" ? "تیم ما" : "Team"}
          </a>
          <a className="title-about-button" href={"/#about"}>
            {lang === "fa" ? "درباره ی ما" : "About"}
          </a>
        </div> */}
      </React.Fragment>
    );
  }
}

export default Title;
