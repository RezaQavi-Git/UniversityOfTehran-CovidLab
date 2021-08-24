import React from "react";

import Footer from "../../common/footer/Footer";
import Language from "../common/header/Language";
import Navbar from "../common/header/Navbar";

import "../common/total-page.css";
import './links.css'

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
        <Language lang={lang} url={"/ventilator/links/" + lang} />
        <div className="main">
          <Navbar lang={lang} />
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
          <p>
            {lang === "fa"
              ? "این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است "
              : "This is a hypothetical text This is a hypothetical text This is a hypothetical text This is a hypothetical text This is a hypothetical text This is a hypothetical text This is a hypothetical text This is a hypothetical text This is a hypothetical text This is a hypothetical text This text is hypothetical This text is hypothetical This text is hypothetical This text is hypothetical This text is hypothetical This text is hypothetical This text is hypothetical This text is hypothetical This text is hypothetical This text is hypothetical This is a hypothetical text This is a hypothetical text This is a hypothetical text This is a hypothetical text This is a hypothetical text This is a hypothetical text This is a hypothetical text This is a hypothetical text This is a hypothetical text This is a hypothetical text It is hypothetical"}
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Links;
