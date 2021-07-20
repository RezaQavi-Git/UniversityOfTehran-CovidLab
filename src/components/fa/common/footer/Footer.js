import React from 'react';

import '../../../common/footer.css'

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
                        <img src="https://img.icons8.com/ios/50/ffffff/address--v1.png" alt="location" className="footer-img"/>
                        <p className="footer-detail">دانشکده مهندسی برق و کامپیوتر ، دانشکده فنی و مهندسی دانشگاه ، دانشگاه تهران ، خیابان کارگر شمالی ، تهران ، ایران. </p>
                    </div>
                    <div className="footer-member">
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" alt="phone" className="footer-img"/>
                        <p className="footer-detail" dir="ltr">+98 21 82084960</p>
                    </div>
                    <div className="footer-member">
                        <img src="https://img.icons8.com/ios/50/ffffff/email-open.png" alt="email" className="footer-img"/>
                        <p className="footer-detail">ece@ece.ut.ac.ir</p>
                    </div>
                    <div className="footer-copyright">
                        <p > تمامی حقوق سایت متعلق به شرکت فلان میباشد . طراح <a href="https://github.com/RezaQavi-git">رضا قوی</a> </p>
                    </div>
                </footer>
            </React.Fragment>
        )
    }

}

export default Footer;