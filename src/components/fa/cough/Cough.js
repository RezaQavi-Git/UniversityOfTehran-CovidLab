import React from 'react';

import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import Title from './title/Title';
import RecordBox from './record-box/RecordBox';
import Team from './team/Team';
import About from './about/About';


import '../../common/total-page.css';

import fa_img from '../../static/images/fa-lang.png';
import en_img from '../../static/images/en-lang.png';

const fa_url = "/";
const en_url = "/en";

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
                <div className="lang-button" >
                    <a href={en_url}><img src={en_img} alt="english-lang" className="lang-img" /></a>
                    <a href={fa_url}><img src={fa_img} alt="presian-lang" className="lang-img" /></a>
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