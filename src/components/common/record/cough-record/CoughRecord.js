import React from 'react';

import './cough-record.css'

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
        this.setState({
            situation: event.target.value
        }) ;
    }

    setGender(event) {
        this.setState({
            gender: event.target.value
        }) ;    
    }

    setSmoke(event) {
        this.setState({
            smoke: event.target.value
        }) ;    
    }

    start = () => {   
        document.getElementById("notife").innerText = "درحال ضبط";
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
        document.getElementById("notife").innerText = "ضبط متوقف شد";
        Mp3Recorder
          .stop()
          .getMp3()
          .then(([buffer, blob]) => {
            const blobURL = URL.createObjectURL(blob)
            this.setState({ blobURL, isRecording: false });
          }).catch((e) => console.log(e));
      };


      reStart = () => {
        document.getElementById("notife").innerText = "دوباره تلاش کنید";
          this.setState({
              blobURL: ''
          })
      }

    
    render () {

        const lang = this.props.lang;
        if(lang === "fa") {
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
                            <div className="control-buttom">
                                <button onClick={this.reStart} disabled={this.state.isRecording} className="record-buttom">تلاش مجدد</button>
                                <button className="submit-buttom">ارسال</button>
                                <button onClick={this.stop} disabled={!this.state.isRecording} className="record-buttom stop">توقف</button>
                                <button onClick={this.start} disabled={this.state.isRecording} className="record-buttom">ضبط</button>
                            </div><br/>
                            <span id="notife" className="notife"></span>
                        </div>
                        
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <br/>
                    <div className="title" >
                        <div className="title-head">
                            <p >Record Voice</p>
                        </div>
                        <div className="title-description">
                            <p >Accompany us in a more accurate answer by filling in the details below</p>
                        </div>
                    </div><br/>
                    <div className="questions en">
                        <div className="question">
                            <div>
                                <p className="question-title">Please specify your status</p>
                            </div>
                            <div className="question-options">
                                <form className="question-form" onChange={this.setSituation.bind(this) }>
                                        <input type="radio" id="q1-1" name="type" value="positive" />
                                      <label for="html">Definitive diagnosis of Covid 19</label><br/>
                                        <input type="radio" id="q1-2" name="type" value="middle" />
                                      <label for="html">Suspicious of Covid 19</label><br/>
                                        <input type="radio" id="q1-3" name="type" value="others" />
                                      <label for="html">Other diseases</label><br/>
                                        <input type="radio" id="q1-4" name="type" value="healthy" />
                                      <label for="html">Healthy</label><br/>
                                    <br/>
                                </form>
                            </div>
                        </div>
    
                        <div className="question">
                            <div>
                                <p className="question-title">Please specify your gender</p>
                            </div>
                            <div className="question-options">
                                <form className="question-form" onChange={this.setGender.bind(this) }>
                                        <input type="radio" id="q2-1" name="type" value="men" />
                                      <label for="html">Male</label><br/>
                                        <input type="radio" id="q2-2" name="type" value="wemen" />
                                      <label for="html">Female</label><br/>
                                        <input type="radio" id="q2-3" name="type" value="others" />
                                      <label for="html">I have no desire to say</label><br/>
                                    <br/>
                                </form>
                            </div>
                        </div>
    
                        <div className="question">
                            <div>
                                <p className="question-title">Do you have a history of smoking?</p>
                            </div>
                            <div className="question-options" onChange={this.setSmoke.bind(this) }>
                                <form className="question-form">
                                        <input type="radio" id="q3-1" name="type" value="true" />
                                      <label for="html">Yes</label><br/>
                                        <input type="radio" id="q3-2" name="type" value="false" />
                                      <label for="html">No</label><br/>
                                    <br/>
                                </form>
                            </div>
                        </div>
    
                    </div>
                    {/* https://github.com/sivaprakashDesingu/react-voice-recorder/tree/master/src/imgs */}
                    <div className="record en">
                        <div className="recorder">
                            <audio src={this.state.blobURL} controls="controls" className="record-player" />
                            <div className="control-buttom">
                                <button onClick={this.start} disabled={this.state.isRecording} className="record-buttom">start</button>
                                <button onClick={this.stop} disabled={!this.state.isRecording} className="record-buttom stop">stop</button>
                                <button className="submit-buttom">submit</button>
                                <button onClick={this.reStart} disabled={this.state.isRecording} className="record-buttom">reTry</button>
                            </div><br/>
                            <span id="notife" className="notife"></span>
                        </div>
                        <div className="hints">
                            <div className="en">
                            <p> To record the sound of a cough, please do so in a quiet environment as much as possible </p>
                            <p> Also, when using this program, please follow the health tips. For example: </p>
                            <ol className="health-tips">
                                <li> 1. Disinfect your phone or tablet properly after use. </li>
                                <li> 2. Avoid coughing in front of others. </li>
                                <li> 3. If you are recording a coughing sound from others, keep the appropriate distance and use a mask. </li>
                            </ol>
                            </div>
                        </div>
                        
                    </div>
                </React.Fragment>
            );
        }


    }
}

export default CoughRecord;