import React from "react";

import Footer from "../../common/footer/Footer";
import Navbar from "../common/header/Navbar";

import "./description.css";

import $ from "jquery";

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {
      lang,
      match: { params },
    } = this.props;
    const title = lang === "fa" ? "توضیحات" : "Description";
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
          <Navbar lang={lang} page="description"/>
          <p className="seprator">
            {lang === "fa" ? "توضیحات" : "Description"}
          </p>
          <DescriptionBody lang={lang} />
          <p className="seprator"></p>
          <Footer lang={lang} />
        </div>
      </React.Fragment>
    );
  }
}

class DescriptionBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const lang = this.props.lang;
    return (
      <React.Fragment>
        <div className="description-body">
          <p>{lang === "fa" ? "" : ""}</p>
          <p>
            {lang === "fa"
              ? "مزایا و معایب سیستم بر مبنای آمبوبگ در مقابل سیستم"
              : "Advantages and disadvantages of ambobag-based system versus system"}
          </p>

          <div className="ventilator-adv">
            <p>{lang === "fa" ? "مزایا:" : "Advantages:"}</p>
            <p>
              {lang === "fa"
                ? "1.امکان گرفتن تاییدیه از تجهیزات پزشکی در زمان کوتاه. در صورتی که از میکرو کمپرسور استفاده شود رده ارزیابی دستگاه در رده ونتیلاتورها دسته بندی خواهد شد و عملا امکان دریافت مجوز وجود نخواهد داشت. در حالی که با استفاده از آمبو بگ امکان دریافت مجوز برای شرایط اضطرار یا آمبولانس ها وجود دارد. "
                : "1. Ability to get approval from medical equipment in a short time. If a micro-compressor is used, the evaluation category of the device will be classified in the category of ventilators and it will be practically impossible to obtain a license. While using Ambo Bag, it is possible to get a license for emergencies or ambulances."}
            </p>
            <p>
              {lang === "fa"
                ? "2.داشتن سیستمهای کنترلی-حفاظتی مکانیکی همچون کنترل فشار مکانیکی (pressure control valve)"
                : "2. Having mechanical control-protection systems such as mechanical pressure control valve (pressure control valve)"}
            </p>
            <p>
              {lang === "fa"
                ? "3.امکان ادامه کار در صورت قطع برق و خرابی سیستم مکانیکی/الکترونیکی"
                : "3. Possibility to continue work in case of power failure and"}
            </p>
            <p>
              {lang === "fa"
                ? "4.امکان انتقال از مریض به مریض دیگر به سهولت با تغییر آمبوبگ"
                : "4. Ability to transfer from one patient to another easily by changing the ambobag"}
            </p>
            <p>
              {lang === "fa"
                ? "5.هزینه کمتر و امکان ارائه طرح باز (open source)"
                : "5. Lower cost and possibility of providing open source design"}
            </p>
            <p>
              {lang === "fa"
                ? "6.در دسترس بودن بیشتر قطعات"
                : "6. Availability of more parts"}
            </p>
            <p>
              {lang === "fa"
                ? "7.وجود تجربه ساخت سیستم در مجموعه"
                : "7. Existence of system building experience in the collection"}
            </p>
            <p>
              {lang === "fa"
                ? "8.تجربه جهانی به سمت استفاده از آمبوبگ است. برای رعایت پروتکل های بهداشتی با توجه به هزینه پایین آمبوبگ امکان تعویض وجود دارد"
                : "8. Global experience is towards the use of ambobag. Due to the low cost of ambobag, it is possible to follow the health protocols"}
            </p>
          </div>
          <div className="ventilator-dissadv">
            <p>{lang === "fa" ? "معایب:" : "Disadvantages:"}</p>
            <p>
              {lang === "fa" ? "1.کنترل پیچیده تر" : "1. More complex control"}
            </p>
            <p>
              {lang === "fa"
                ? "2.از مزایای میکروکمپرسور امکان ایجاد جریان هوا(flow) مطلوب با کنترل بسیار راحت است در حالی که در آمبوبگ برای داشتن جریان هوا یا ایجاد فشار ثابت مشخص چالش هایی وجود خواهد داشت."
                : "2. One of the advantages of the microcompressor is the possibility of creating the desired air flow with very easy control, while in Ambobag there will be challenges to have a certain air flow or to create a certain constant pressure."}
            </p>
            <p>
              {lang === "fa"
                ? "3.حجم زیادتر : ابعاد تجهیز برای گرفتن آمبو بگ بزرگتر خواهد بود."
                : "3. Larger volume: The dimensions of the equipment for taking ambo bag will be bigger."}
            </p>
            <p>
              {lang === "fa"
                ? "4.عدم امکان اجرای خصوصیات پیشرفته"
                : "4. Impossibility to implement advanced features"}
            </p>
            <p>
              {lang === "fa"
                ? "5.امکان مصرف انرژی بالاتر "
                : "5. Possibility of higher energy consumption"}
            </p>
          </div>

          <p>
            {lang === "fa"
              ? "نتیجه گیری: در صورتی که دریافت مجوز در دستور کار تیم باشد استفاده از آمبوبگ پیشنهاد می شود. می توان با تکیه بر اینکه تجهیز آمبو بگ تجهیزی دارای مجوز است و با توجه به شرایط اضطرار و برای استفاده در آمبولانس ها، شانس دریافت مجوز را بالاتر برد"
              : "Conclusion: If obtaining a license is on the agenda of the team, the use of ambobag is recommended. It is possible to increase the chances of obtaining a license by relying on the fact that the equipment of the ambulance bag is licensed and according to the emergency conditions and for use in ambulances. "}
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Description;
