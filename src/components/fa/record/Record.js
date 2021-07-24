import React from 'react';

import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import CoughRecord from '../../common/record/cough-record/CoughRecord'
import Language from '../../common/header/Language';

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
                <Language lang="fa" url="/record" />
                <div className="main">
                    <Header lang="fa"/>
                    <CoughRecord lang="fa"/>  
                    <p className="seprator"></p>
                    <Footer lang="fa"/>
                </div>
            </React.Fragment>       
        )
    }
}

export default Record;