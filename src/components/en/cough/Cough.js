import React from 'react';



import Header from '../../common/header/Header';
import Language from '../../common/header/Language';
import Footer from '../../common/footer/Footer';
import Title from '../../common/cough/title/Title';
import RecordBox from '../../common/cough/record-box/RecordBox';
import Team from '../../common/cough/team/Team';
import About from '../../common/cough/about/About';
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
                <Language lang="en" url="/" />
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