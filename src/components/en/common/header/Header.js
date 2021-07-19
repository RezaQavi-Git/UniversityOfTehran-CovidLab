import React from 'react';

import './header-styles.css';
import LOGO from '../../../static/images/ut-logo.png';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {            
        }
    }

    render(){
        return(
            <React.Fragment>
                <div className="logo">
                    <div className="logo-title">
                        <p className="logo-title_">University of Tehran</p>
                        <p className="logo-title_">School of Electrical & Computer Engineering</p>
                    </div>
                    <img src={LOGO} alt="univerrsity of tehran logo" className="logo-img" />
                </div>
            </React.Fragment>

        )
    }
}

export default Header;