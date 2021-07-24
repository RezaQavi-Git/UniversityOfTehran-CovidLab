import React from 'react';

import './title.css'

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        const lang = this.props.lang;
        if(lang === "fa") {
            return(
                <React.Fragment>
                    <div className="title">
                        <p className="title-head">
                            تشخیص کووید 19 از روی صدای سرفه
                        </p>
                        <p className="title-description">
                            یزد- ایرنا- سخنگوی دانشگاه علوم پزشکی شهید صدوقی یزد گفت: هم‌اکنون ۸۱۱ نفر به دلیل ابتلا به بیماری کووید ۱۹ در بیمارستان های استان بستری هستند که از این تعداد به ۱۳۶ نفر در بخش مراقبت‌های ویژه آی .سی.یو( I.C.U) خدمات درمانی ارایه می‌شود.
                        </p>
                    </div>
                    <br></br>
                    <div className="title-button">
                        <a className="title-team-button" href="#team">تیم ما</a>
                        <a className="title-about-button" href="#about">درباره ی ما</a>        
                    </div>
                </React.Fragment>
            )
        } else {
            return(
                <React.Fragment>
                    <div className="title">
                        <p className="title-head">
                        Detection of Covid 19 by coughing sound
                        </p>
                        <p className="title-description" >
                            Yazd - IRNA - The spokesman of Shahid Sadoughi University of Medical Sciences in Yazd said: "Currently, 811 people are hospitalized in the province due to Covid 19 disease, of which 136 people are in the ICU intensive care unit of medical services." Is presented.
                        </p>
                    </div>
                    <br></br>
                    <div className="title-button">
                        <a className="title-team-button" href="#team">Team</a>
                        <a className="title-about-button" href="#about">About us</a>        
                    </div>
                </React.Fragment>
            )
        }
    }

}

export default Title;