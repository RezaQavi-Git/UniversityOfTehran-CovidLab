import React from 'react';

import '../../../common/cough/about.css'

import ROBOLAB from '../../../static/images/robolab.jpg';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        
        return(
            <React.Fragment>
                <br></br><br></br>
                <div className="about">
                    <div className="about-description" >
                        <p>
                            زد- ایرنا- سخنگوی دانشگاه علوم پزشکی شهید صدوقی یزد گفت: هم‌اکنون ۸۱۱ نفر به دلیل ابتلا به بیماری کووید ۱۹ در بیمارستان های استان بستری هستند که از این تعداد به ۱۳۶ نفر در بخش مراقبت‌های ویژه آی .سی.یو( I.C.U) خدمات درمانی ارایه می‌شود
                        </p>
                    </div>
                    <div className="about-img">
                        <img src={ROBOLAB} alt="ازمایشگاه رباتیک" className="about-image"/>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default About;