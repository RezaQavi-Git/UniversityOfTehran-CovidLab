import React from "react";

import Footer from "../../common/footer/Footer";
import Navbar from "../common/header/Navbar";

import "./documents.css";

import $ from "jquery";

class Documents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {
      lang,
      match: { params },
    } = this.props;
    const title = lang === "fa" ? "مستندات" : "Documents";
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
          <Navbar lang={lang}  page="documents"/>
          <p className="seprator">{lang === "fa" ? "لیست قطعات" : "The list of components"}</p>
          <DocumentsBody lang={lang} />
          <p className="seprator"></p>
          <Footer lang={lang} />
        </div>
      </React.Fragment>
    );
  }
}

class DocumentsBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const lang = this.props.lang;
    return (
      <React.Fragment>
        <div className="documents-body">
          <p>{lang === "fa" ? "" : ""}</p>
          <table>
            <tr>
              <th></th>
              <th>Brand 1(Mr Rafee)</th>
              <th>Link</th>
              <th>Brand 2(MIT)</th>
              <th>Link</th>
              <th>Brand 3(Nojan)</th>
              <th>Link</th>
            </tr>
            <tr>
              <td>Regulator</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Solenoid Valve</td>
              <td>Picosol On Off switch</td>
              <td></td>
              <td></td>
              <td></td>
              <td>Miniature Valve XV10G</td>
              <td></td>
            </tr>
            <tr>
              <td>Solenoid Valve</td>
              <td>Picosol On Off switch</td>
              <td></td>
              <td></td>
              <td></td>
              <td>Miniature Valve XV10G</td>
              <td></td>
            </tr>
            <tr>
              <td>HME Filter</td>
              <td>VADI</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Ambu bag</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Motor</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Kormas 140 watt</td>
              <td></td>
            </tr>
            <tr>
              <td>Motor Driver</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Nojan</td>
              <td></td>
            </tr>
            <tr>
              <td>Power</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Nojan</td>
              <td></td>
            </tr>
            <tr>
              <td>Battery</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Nojan</td>
              <td></td>
            </tr>
            <tr>
              <td>FiO2</td>
              <td>X O Y M 0 30 PF</td>
              <td></td>
              <td></td>
              <td></td>
              <td>oom202 envitec</td>
              <td>
                <a href="https://www.envitec.com/en/products/portfolio/medical-products.html?tx_produktliste_pi1[sorting]=title&tx_produktliste_pi1[order]=asc&tx_produktliste_pi1[filterByCat]=2%2C3&tx_produktliste_pi1[filterId]=1%2C1">
                  more
                </a>
              </td>
            </tr>
            <tr>
              <td>RPI</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>LCD</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Proportional Valve</td>
              <td>LM Pro model 2&4</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Proportional Valve</td>
              <td>LM Pro model 2&4</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>HME Filter</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Flow Sensor</td>
              <td>SFM3300-AW</td>
              <td></td>
              <td></td>
              <td></td>
              <td>SpiroQuant A+ Envitec</td>
              <td>
                <a href="https://www.envitec.com/en/products/portfolio/medical-products/flow_sensor_spiroquant_a_ART__E1000470.html">
                  more
                </a>
              </td>
              <td>
                <a href="https://www.envitec.com/en/products/portfolio/medical-products.html?tx_produktliste_pi1[sorting]=title&tx_produktliste_pi1[order]=asc&tx_produktliste_pi1[filterByCat]=2%2C3&tx_produktliste_pi1[filterId]=1%2C5">
                  more
                </a>
              </td>
            </tr>
            <tr>
              <td>Pressure Sensor</td>
              <td></td>
              <td></td>
              <td>SSCDRRN100MDAA5  honeywell</td>
              <td><a href="https://www.onlinecomponents.com/honeywell/sscdrrn100mdaa5-42881835.html">more</a></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Mask</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>CO2</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>GC-0018 SprintIR®-W 100% CO2 Sensor Only</td>
              <td><a href="https://www.co2meter.com/collections/co2-sensors/products/sprintir-100-percent-co2-sensor">more</a></td>
            </tr>
            <tr>
              <td>Power</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>MEA-250A24C H-A</td>
              <td><a href="https://www.digikey.com/product-detail/en/delta-electronics/MEA-250A24C-H-A/1145-1304-ND/9694747">more</a></td>
            </tr>
            <tr>
              <td>Radial Blower</td>
              <td>U71HX</td>
              <td><a href="https://www.micronel.com/products/micronel-inside-medical/">more</a></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>High capacity Pump</td>
              <td>T2 02</td>
              <td><a href="https://www.parker.com/literature/PND_MDP_001.pdf">more</a></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Documents;
