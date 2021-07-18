import React from 'react';



import Header from '../header/Header';
import Title from '../title/Title';
import QuestionBox from '../question-box/QuestionBox';
import Team from '../team/Team';
import About from '../about/About';
import Footer from '../footer/Footer';


import './cough-styles.css'

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
                <p className="seprator">پرسشنامه</p>
                <QuestionBox />
                <p className="seprator">تیم ما</p>
                <Team />
                <p className="seprator">درباره ی ما</p>
                <About />   
                <Footer />
                </div>
            </React.Fragment>       
        )
    }
}

export default Cough;