import React from 'react';



import Header from '../header/Header';
import Title from './title/Title';
import RecordBox from './record-box/RecordBox';
import Team from './team/Team';
import About from './about/About';
import Footer from '../footer/Footer';


import './cough-styles.css'
import '../common.css'

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