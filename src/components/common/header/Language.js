import React from 'react';

import '../total-page.css';

import fa_img from '../../static/images/fa-lang.png';
import en_img from '../../static/images/en-lang.png';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {            
        }
    }
    
    
    render(){

        const lang = this.props.lang;
        const url = this.props.url;


        if(lang === "en") {
            return(
                <React.Fragment>
                    <div className="lang-button-en" >
                        <a href={(url === "/") ? "/en": "/record/en"}><img src={en_img} alt="english-lang" className="lang-img" /></a>
                        <a href={(url === "/") ?"/": "/record"}><img src={fa_img} alt="presian-lang" className="lang-img" /></a>
                    </div>
                </React.Fragment>
    
            )
        } else {
            return(
                <React.Fragment>
                <div className="lang-button" >
                    <a href={(url === "/") ? "/en": "/en"}><img src={en_img} alt="english-lang" className="lang-img" /></a>
                    <a href={(url === "/") ? "/": "/record"}><img src={fa_img} alt="presian-lang" className="lang-img" /></a>
                </div>
                </React.Fragment>
            );
        }

    }
}

export default Header;