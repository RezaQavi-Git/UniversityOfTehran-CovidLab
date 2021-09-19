import React from "react";

import Footer from "../../common/footer/Footer";
import Navbar from "../common/header/Navbar";

import "./links.css";

import $ from "jquery";

class Links extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {
      lang,
      match: { params },
    } = this.props;
    const title = lang === "fa" ? "لینک ها" : "Links";
    const dir = "ltr";

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
          <Navbar lang={lang} page="links" />
          <p className="seprator">{lang === "fa" ? "لینک ها" : "Links"}</p>
          <LinksBody lang={lang} />
          <p className="seprator"></p>
          <Footer lang={lang} />
        </div>
      </React.Fragment>
    );
  }
}

class LinksBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const lang = this.props.lang;
    return (
      <React.Fragment>
        <div className="links-body">
          <p>{lang === "fa" ? "" : ""}</p>
          <p>Links to Ambu bag around the world</p>
          <a href="https://spectrum.ieee.org/news-from-around-ieee/the-institute/ieee-member-news/diy-ventilators-for-covid19-could-be-a-vital-stopgap">
            <p>
              {lang === "fa"
                ? "1.	https://spectrum.ieee.org/news-from-around-ieee/the-institute/ieee-member-news/diy-ventilators-for-covid19-could-be-a-vital-stopgap"
                : "1.	https://spectrum.ieee.org/news-from-around-ieee/the-institute/ieee-member-news/diy-ventilators-for-covid19-could-be-a-vital-stopgap"}
            </p>
          </a>
          <a href="https://spectrum.ieee.org/news-from-around-ieee/the-institute/ieee-member-news/indias-breath-of-hope-volunteers-designed-7-medical-devices-for-covid19-patients">
            <p>
              {lang === "fa"
                ? "2.	https://spectrum.ieee.org/news-from-around-ieee/the-institute/ieee-member-news/indias-breath-of-hope-volunteers-designed-7-medical-devices-for-covid19-patients"
                : "2.	https://spectrum.ieee.org/news-from-around-ieee/the-institute/ieee-member-news/indias-breath-of-hope-volunteers-designed-7-medical-devices-for-covid19-patients"}
            </p>
          </a>
          <a href="https://emergency-vent.mit.edu/">
            <p>
              {lang === "fa"
                ? "3.	https://emergency-vent.mit.edu/"
                : "3.	https://emergency-vent.mit.edu/"}
            </p>
          </a>
          <a href="https://med.umn.edu/covid19Ventilator">
            <p>
              {lang === "fa"
                ? "4.	https://med.umn.edu/covid19Ventilator"
                : "4.	https://med.umn.edu/covid19Ventilator"}
            </p>
          </a>
          <a href="https://www.uff.ufl.edu/giving-opportunities/024631-covid-19-ventilators/">
            <p>
              {lang === "fa"
                ? "5.	https://www.uff.ufl.edu/giving-opportunities/024631-covid-19-ventilators/"
                : "5.	https://www.uff.ufl.edu/giving-opportunities/024631-covid-19-ventilators/"}
            </p>
          </a>
          <a href="https://www.reuters.com/article/us-health-coronavirus-afghanistan-ventil/afghan-all-girls-robotics-team-designs-low-cost-ventilator-to-treat-coronavirus-patients-idUSKCN24L0WO">
            <p>
              {lang === "fa"
                ? "6.	https://www.reuters.com/article/us-health-coronavirus-afghanistan-ventil/afghan-all-girls-robotics-team-designs-low-cost-ventilator-to-treat-coronavirus-patients-idUSKCN24L0WO"
                : "6.	https://www.reuters.com/article/us-health-coronavirus-afghanistan-ventil/afghan-all-girls-robotics-team-designs-low-cost-ventilator-to-treat-coronavirus-patients-idUSKCN24L0WO"}
            </p>
          </a>

          <p className="seprator">FDA</p>
          <p className="red-text">EUA</p>
          <p>
            <ul>
              <li>
                Information on current Emergency Use Authorizations (EUA) is
                found{" "}
                <a href="https://www.fda.gov/medical-devices/emergency-situations-medical-devices/emergency-use-authorizations">
                  here
                </a>
                . If you need additional information on the Emergency Use
                Authorization process, including information on situations that
                qualify for EUA and the general information that FDA needs to
                determine whether your device meets the criteria for an EUA, the
                guidance document is found{" "}
                <a href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/emergency-use-authorization-medical-products-and-related-authorities">
                  here
                </a>
                .
              </li>
              <li>
                Information on the difference between N95 respirators and face
                masks is found{" "}
                <a href="https://www.fda.gov/medical-devices/personal-protective-equipment-infection-control/n95-respirators-and-surgical-masks-face-masks">
                  here
                </a>
                .
              </li>
              <li>
                If you are submitting information for a{" "}
                <b>diagnostic test (IVD)</b>, please contact{" "}
                <a href="mailto: Covid19DX@fda.hhs.gov">
                  Covid19DX@fda.hhs.gov
                </a>
                .
              </li>
            </ul>
          </p>
          <p  className="red-text">IMPORTS</p>
          <p>
            <ul>
              <li>
                General information on <b>importing</b> medical devices is found{" "}
                <a href="https://www.fda.gov/medical-devices/importing-and-exporting-medical-devices/importing-medical-devices-and-radiation-emitting-electronic-products-us">
                  here
                </a>
                . Please note that specific import information regarding certain
                types of medical products, including respirators, masks,
                ventilators, and personal protective equipment (PPE) are located
                in the{" "}
                <a href="https://www.fda.gov/emergency-preparedness-and-response/coronavirus-disease-2019-covid-19/covid-19-related-guidance-documents-industry-fda-staff-and-other-stakeholders">
                  specific guidance documents
                </a>{" "}
                and{" "}
                <a href="https://www.fda.gov/medical-devices/emergency-situations-medical-devices/emergency-use-authorizations-medical-devices">
                  EUAs
                </a>
                . A link to the U.S. Customs and Border Protection Cargo
                Messaging System Messages (CSMS) is found{" "}
                <a href="https://www.cbp.gov/trade/automated/cargo-systems-messaging-service">
                  here
                </a>
                .
              </li>
              <li>
                If you still have questions on <b>importing</b> medical devices
                that are not addressed in the above links, including the{" "}
                <a href="https://www.fda.gov/emergency-preparedness-and-response/coronavirus-disease-2019-covid-19/covid-19-related-guidance-documents-industry-fda-staff-and-other-stakeholders">
                  specific guidance documents
                </a>{" "}
                and{" "}
                <a href="https://www.fda.gov/medical-devices/emergency-situations-medical-devices/emergency-use-authorizations-medical-devices">
                  EUAs
                </a>
                , please send your inquiry to
                <a href="mailto: COVID19FDAIMPORTINQUIRIES@fda.hhs.gov">
                  COVID19FDAIMPORTINQUIRIES@fda.hhs.gov
                </a>
              </li>
            </ul>
          </p>
          <p  className="red-text">SHORTAGES</p>
          <p>
            <ul>
              <li>
                If you are a <b>medical device manufacturer</b> reporting a
                device shortage, please send your message to{" "}
                <a href="mailto: deviceshortages@fda.hhs.gov">
                  deviceshortages@fda.hhs.gov
                </a>
                .{" "}
              </li>
            </ul>
          </p>
          <p  className="red-text">REQUESTING AN EUA</p>
          <p>
            <ul>
              <li>
                If you have reviewed the information on current Emergency Use
                Authorizations, the <a href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/emergency-use-authorization-medical-products-and-related-authorities">Emergency Use Authorization Guidance
                Document</a>, the <a href="https://www.fda.gov/emergency-preparedness-and-response/coronavirus-disease-2019-covid-19/covid-19-related-guidance-documents-industry-fda-staff-and-other-stakeholders">specific guidance documents</a> and <a href="https://www.fda.gov/medical-devices/emergency-situations-medical-devices/emergency-use-authorizations-medical-devices">EUAs</a>, you have
                confirmed that your product is not a diagnostic device, and you
                are submitting an EUA request, please submit your Non-Diagnostic
                EUA request to us at <a href="mailto: CDRH-NonDiagnosticEUA-Templates@fda.hhs.gov">CDRH-NonDiagnosticEUA-Templates@fda.hhs.gov</a>
              </li>
            </ul>
          </p>
          <p>
          <a href="/app/ventilator/request/en" className="request-link"><span style={{color: "white"}}>REQUEST FOR FDA</span></a>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Links;
