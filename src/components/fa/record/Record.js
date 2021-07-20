import React from 'react';

import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import CoughRecord from '../../common/record/cough-record/CoughRecord'

import '../../common/total-page.css';

import fa_img from '../../static/images/fa-lang.png';
import en_img from '../../static/images/en-lang.png';

const fa_url = "/record";
const en_url = "/record/en";

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
                <div className="lang-button" >
                    <a href={en_url}><img src={en_img} alt="english-lang" className="lang-img" /></a>
                    <a href={fa_url}><img src={fa_img} alt="presian-lang" className="lang-img" /></a>
                </div>
                <div className="main">
                    <Header lang="fa"/>
                    <CoughRecord lang="fa"/>  
                    <p className="seprator"></p>
                    <Footer lang="fa"/>
                </div>
            </React.Fragment>       
        )
    }
}

export default Record;