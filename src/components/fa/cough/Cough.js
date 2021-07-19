import React from 'react';

import $ from 'jquery';

import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import Title from './title/Title';
import RecordBox from './record-box/RecordBox';
import Team from './team/Team';
import About from './about/About';


import '../../common/total-page.css';


class Cough extends React.Component {

    constructor(props) {
        super(props);
        this.state = {            
        }
    }

    componentDidMount(){
        document.title = 'cough';
    }

    render() {
        return (
            <React.Fragment>
                <div className="lang-button">
                    <button className="dropbtn" >زبان</button>
                    <div className="lang-button-content">
                        <a href={"/"}>فارسی</a>
                        <a href={ "/en"}>انگلیسی</a>
                        </div>
                </div>
                <div className="main">
                    <Header />
                    <Title />
                    <p className="seprator">توضیحات</p>
                    <RecordBox />
                    <p id="team" className="seprator">تیم ما</p>
                    <Team />
                    <p id="about"className="seprator">درباره ی ما</p>
                    <About />   
                    <Footer />
                </div>
            </React.Fragment>       
        )
    }
}

export default Cough;