import React from 'react';

import './cough-record-styles.css';
import '../../common.css'


import MicRecorder from 'mic-recorder-to-mp3';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });


class CoughRecord extends React.Component{
    constructor(props) {
        super(props) ;
        this.state = {
            situation: "",
            gender: "",
            smoke: "", 
            isRecording: false,
            blobURL: '',
            isBlocked: false,
            }
        }

    setSituation(event) {
        console.log(event.target.value);
    }

    setGender(event) {
        console.log(event.target.value);
    }

    setSmoke(event) {
        console.log(event.target.value);
    }

    start = () => {
        if (this.state.isBlocked) {
          console.log('Permission Denied');
        } else {
          Mp3Recorder
            .start()
            .then(() => {
              this.setState({ isRecording: true });
            }).catch((e) => console.error(e));
        }
      };

      stop = () => {
        Mp3Recorder
          .stop()
          .getMp3()
          .then(([buffer, blob]) => {
            const blobURL = URL.createObjectURL(blob)
            this.setState({ blobURL, isRecording: false });
          }).catch((e) => console.log(e));
      };

    
    render () {
        return (
            <React.Fragment>
                <br/>
                <div className="title" >
                    <div className="title-head">
                        <p >ضبط صدا</p>
                    </div>
                    <div className="title-description">
                        <p >با پر کردن مشخصات زیر مارا در پاسخگویی دقیق تر همراهی کنید</p>
                    </div>
                </div><br/>
                <div className="questions">
                    <div className="question">
                        <div>
                            <p className="question-title">لطفا وضعیت خود را مشخص کنید</p>
                        </div>
                        <div className="question-options">
                            <form className="question-form" onChange={this.setSituation.bind(this) }>
                                    <input type="radio" id="q1-1" name="type" value="positive" />
                                  <label for="html">تشخیص قطعی کووید19</label><br/>
                                    <input type="radio" id="q1-2" name="type" value="middle" />
                                  <label for="html">مشکوک به کووید19</label><br/>
                                    <input type="radio" id="q1-3" name="type" value="others" />
                                  <label for="html">بیماری های دیگر</label><br/>
                                    <input type="radio" id="q1-4" name="type" value="healthy" />
                                  <label for="html">سالم</label><br/>
                                <br/>
                            </form>
                        </div>
                    </div>

                    <div className="question">
                        <div>
                            <p className="question-title">لطفا جنسیت خود را مشخص کنید</p>
                        </div>
                        <div className="question-options">
                            <form className="question-form" onChange={this.setGender.bind(this) }>
                                    <input type="radio" id="q2-1" name="type" value="men" />
                                  <label for="html">مرد</label><br/>
                                    <input type="radio" id="q2-2" name="type" value="wemen" />
                                  <label for="html">زن</label><br/>
                                    <input type="radio" id="q2-3" name="type" value="others" />
                                  <label for="html">تمایلی به گفتن ندارم</label><br/>
                                <br/>
                            </form>
                        </div>
                    </div>

                    <div className="question">
                        <div>
                            <p className="question-title">آیا سابقه ی مصرف سیگار دارید؟</p>
                        </div>
                        <div className="question-options" onChange={this.setSmoke.bind(this) }>
                            <form className="question-form">
                                    <input type="radio" id="q3-1" name="type" value="true" />
                                  <label for="html">بله</label><br/>
                                    <input type="radio" id="q3-2" name="type" value="false" />
                                  <label for="html">خیر</label><br/>
                                <br/>
                            </form>
                        </div>
                    </div>

                </div>
                {/* https://github.com/sivaprakashDesingu/react-voice-recorder/tree/master/src/imgs */}
                <div className="record">
                    <div className="hints">
                        <p>برای ضبط صدای سرفه لطفا تا حد امکان در محیطی ساکت اینکار را انجام دهید</p>
                        <p>همچنین در استفاده از این برنامه لطفا نکات بهداشتی را رعایت کنید. برای مثال:</p>
                        <ol className="health-tips">
                            <li>۱. تلفن یا تبلت خود را پس از استفاده, به روش صحیح,  ضدعفونی کنید.</li>
                            <li>۲. از سرفه در حضور دیگران پرهیز کنید.</li>
                            <li>۳. اگر از دیگران صدای سرفه ضبط میکنید فاصله مناسب را رعایت کرده و از ماسک استفاده کنید.</li>
                        </ol>
                    </div>
                    <div className="recorder">
                        <audio src={this.state.blobURL} controls="controls" className="record-player" />
                        <div className="control-bottom">
                        <button onClick={this.stop} disabled={!this.state.isRecording} className="record-bottom">توقف</button>
                        <button onClick={this.start} disabled={this.state.isRecording} className="record-bottom">ضبط</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default CoughRecord;