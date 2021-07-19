import React from 'react';
import { Link } from 'react-router-dom';

import '../../../common/cough/record-box.css'

class RecordBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        
        return(
            <React.Fragment>
                <div className="description-box">
                    <div className="description-box-description">
                        <p>
                            یزد با یک میلیون و ۲۰۰ هزار نفر  جمعیت ،۱۰ شهرستان دارد،  با توجه به اظهارات سخنگوی دانشگاه یادشده روند سرعت انتشار ویروس کرونا که عامل بیماری کووید ۱۹ است، در استان  رو به افزایش است.
                                هم اکنون وضعیت بهداشتی ۹ شهرستان از ۱۰ شهرستان استان یزد، به دلیل افزایش شیوع ویروس کرونا در حالت قرمز قرار دارد و تنها شهرستان اشکذر به رنگ نارنجی است .
                            به گزارش ایرنا، ویروس کرونا عامل بیماری کووید ۱۹ از اواخر سال ۲۰۱۹ در شهر ووهان چین مشاهده و در مدت کوتاهی در جهان منتشر شد؛ به طوری که سازمان جهانی بهداشت در اسفند ۹۸ (فوریه ۲۰۲۰) بروز پاندمی (همه‌ گیری جهانی) این بیماری را تأیید کرونا         
                            این ویروس با دست آلوده یا عطسه، سرفه و حتی قطره های تنفسی از طریق دهان، بینی و چشم به افراد منتقل می‌شود. تنگی نفس، خستگی و بدن درد، اختلال در بویایی و چشایی و مشکلات گوارشی از جمله علایم  بیماری کووید ۱۹ است  و بیش از ۸۰ درصد مبتلایان به ویروس نیز دچار بیماری خفیف می‌شوند.
                        </p>
                    </div>
                    
                    <div className="description-box-record">
                        <Link to="/record"> <img src="https://img.icons8.com/ios/50/4a90e2/play-record--v2.png" className="microphone" alt="mic"/>  </Link> 
                        <p>ضبط صدا</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default RecordBox;