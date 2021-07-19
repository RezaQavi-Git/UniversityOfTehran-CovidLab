import React from 'react';

import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import CoughRecord from './cough-record/CoughRecord'

import '../record/record-styles.css'

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