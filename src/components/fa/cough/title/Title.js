import React from 'react';

import '../../../common/cough/title.css'

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        
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
                <div className="title-buttom">
                    <a className="title-team-buttom" href="#team">تیم ما</a>
                    <a className="title-about-buttom" href="#about">درباره ی ما</a>        
                </div>
            </React.Fragment>
        )
    }

}

export default Title;