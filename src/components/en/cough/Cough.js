import React from 'react';



import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import Title from './title/Title';
import RecordBox from './record-box/RecordBox';
import Team from './team/Team';
import About from './about/About';


import './cough-styles.css'
import '../common/common.css'

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