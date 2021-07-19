import React from 'react';

import $ from 'jquery';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import CoughRecord from './cough-record/CoughRecord'

import '../../common/total-page.css';

class Record extends React.Component {

    constructor(props) {
        super(props);
        this.state = {            
        }
    }

    componentDidMount(){
        document.title = 'cough-recorder';
    }

    render() {
        return (
            <React.Fragment>
                <div className="lang-button">
                    <button className="dropbtn" >زبان</button>
                    <div className="lang-button-content">
                        <a href={"/record"}>فارسی</a>
                        <a href={"/record/en"} >انگلیسی</a>
                        </div>
                </div>
                <div className="main">
                    <Header />
                    <CoughRecord />  
                    <p className="seprator"></p>
                    <Footer />
                </div>
            </React.Fragment>       
        )
    }
}

export default Record;