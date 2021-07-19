import React from 'react';



import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import Title from './title/Title';
import RecordBox from './record-box/RecordBox';
import Team from './team/Team';
import About from './about/About';
import '../../common/total-page.css';

import $ from 'jquery';


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
                <div className={"lang-button-en"} >
                    <button className="dropbtn" >language</button>
                    <div className="lang-button-en-content">
                        <a href={"/"}>persian</a>
                        <a href={"/en"}>english</a>
                        </div>
                </div>
                <div className="main">
                    <Header />
                    <Title />
                    <p className="seprator">Description</p>
                    <RecordBox />
                    <p id="team" className="seprator">Team</p>
                    <Team />
                    <p id="about"className="seprator">About us</p>
                    <About />   
                    <Footer />
                </div>
            </React.Fragment>       
        )
    }
}

export default Cough;