import React from 'react';



import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import Title from '../../common/cough/title/Title';
import RecordBox from '../../common/cough/record-box/RecordBox';
import Team from '../../common/cough/team/Team';
import About from '../../common/cough/about/About';
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
                <div className="lang-button-en" >
                    <a href={en_url}><img src={en_img} alt="english-lang" className="lang-img" /></a>
                    <a href={fa_url}><img src={fa_img} alt="presian-lang" className="lang-img" /></a>
                </div>
                <div className="main">
                    <Header lang="en"/>
                    <Title lang="en"/>
                    <p className="seprator">Description</p>
                    <RecordBox lang="en"/>
                    <p id="team" className="seprator">Team</p>
                    <Team lang="en" />
                    <p id="about"className="seprator">About us</p>
                    <About lang="en"/>   
                    <Footer lang="en"/>
                </div>
            </React.Fragment>       
        )
    }
}

export default Cough;