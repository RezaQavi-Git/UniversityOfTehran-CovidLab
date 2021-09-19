import React from "react";

import Footer from "../../common/footer/Footer";
import Navbar from "../common/header/Navbar";

import "./fdarequest.css";

import $ from "jquery";

class FDARequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {
      lang,
      match: { params },
    } = this.props;
    const title = "FDARequest";
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
          <Navbar lang={lang} page="" />
          <p className="seprator">{"FDA"}</p>
          <FDARequestBody lang={lang} />
          <p className="seprator"></p>
          <Footer lang={lang} />
        </div>
      </React.Fragment>
    );
  }
}

class FDARequestBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const lang = this.props.lang;
    return (
      <React.Fragment>
        <div className="request-body">
          <p>{lang === "fa" ? "" : ""}</p>
          <p>
            To request a Ventilator Emergency Use Authorization for your device,
            the required information is identified on page 5 and Appendix A of
            the <a href="https://www.fda.gov/media/136423/download">Mar 24, 2020 Ventilator EUA Letter</a>. To aid you in providing the
            required information for review, <b>please complete the <a href="https://www.fda.gov/media/137172/download">EUA Ventilator
            Interactive Review Template</a> document</b> and include it in your
            response.
          </p>
          <p>
            Please include a cover letter with the following contact
            information, including contact information for a U.S. agent (if
            any),
          </p>
          <p>
            <ul>
              <li>Product/Trade Name: </li>
              <li>Applicant Name:</li>
              <li>Applicant Address:</li>
              <li>Applicant Contact Person:</li>
              <li>Applicant Contact Phone #:</li>
              <li>Applicant Contact Email:</li>
              <li>Correspondent Name: </li>
              <li>Correspondent Address:</li>
              <li>Correspondent Contact Person: </li>
              <li>Correspondent Contact Phone #: </li>
              <li>Correspondent Contact Email: </li>
            </ul>
          </p>
          <p>
            Please submit all of the information in your EUA request in a single
            email to <a href="mailto: CDRH-NonDiagnosticEUA-Templates@fda.hhs.gov">CDRH-NonDiagnosticEUA-Templates@fda.hhs.gov</a> with <b>“URGENT
            REPLY – EUA ADDITIONAL INFORMATION INCLUDED”</b> in the subject line.
          </p>
          <p>
            In response to this evolving public health emergency, FDA has
            released a guidance entitled <a href="https://www.fda.gov/media/136318/download"> Enforcement Policy for Ventilators and
            Accessories and Other Respiratory Devices During the Coronavirus
            Disease 2019 (COVID-19) Public Health Emergency</a> outlining FDA’s
            enforcement policy for certain modifications to ventilators and
            accessories and other respiratory devices during this public health
            emergency. We recommend you refer to this guidance to understand
            whether this policy applies to your device.
          </p>
          <p></p>
          <p></p>
        </div>
      </React.Fragment>
    );
  }
}

export default FDARequest;
