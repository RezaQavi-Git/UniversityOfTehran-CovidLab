import React from 'react';

import './footer-styles.css'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        
        return(
            <React.Fragment>
                <footer className="footer">
                    <div className="footer-member">
                        <img src="https://img.icons8.com/ios/50/ffffff/address--v1.png" className="footer-img"/>
                        <p className="footer-detail">دانشکده مهندسی برق و کامپیوتر ، دانشکده فنی و مهندسی دانشگاه ، دانشگاه تهران ، خیابان کارگر شمالی ، تهران ، ایران. </p>
                    </div>
                    <div className="footer-member">
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" className="footer-img"/>
                        <p className="footer-detail" dir="ltr">+98 21 82084960</p>
                    </div>
                    <div className="footer-member">
                        <img src="https://img.icons8.com/ios/50/ffffff/email-open.png" className="footer-img"/>
                        <p className="footer-detail">ece@ece.ut.ac.ir</p>
                    </div>
                </footer>
            </React.Fragment>
        )
    }

}

export default Footer;