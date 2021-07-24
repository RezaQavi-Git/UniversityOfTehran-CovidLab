import React from 'react';

import Header from '../../common/header/Header';
import Language from '../../common/header/Language';
import Footer from '../../common/footer/Footer';
import CoughRecord from '../../common/record/cough-record/CoughRecord'

import '../../common/total-page.css';

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
                <Language lang="en" url="/record" />
                <div className="main">
                    <Header lang="en"/>
                    <CoughRecord lang="en"/>  
                    <p className="seprator"></p>
                    <Footer lang="en"/>
                </div>
            </React.Fragment>       
        )
    }
}

export default Record;