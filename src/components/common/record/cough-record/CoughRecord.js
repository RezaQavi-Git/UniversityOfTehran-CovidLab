import React from 'react';

import './cough-record.css'

import Microphone from '../../../static/images/microphone.png'

import MicRecorder from 'mic-recorder-to-mp3';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

const en_questions = [
    {title: "Please specify your status", 
        options: ["Definitive diagnosis of Covid 19", "Suspicious of Covid 19","Other diseases", "Healthy"]},
    {title: "Please specify your gender", 
        options: ["Male", "Female"]},
    {title: "Do you have a history of smoking?", 
        options: ["Yes", "No"]}
]

const fa_questions = [
    {title: "لطفا وضعیت خود را مشخص کنید", 
        options: ["تشخیص قطعی کووید19", "مشکوک به کووید19","بیماری های دیگر", "سالم"]},
    {title: "لطفا جنسیت خود را مشخص کنید", 
        options: ["مرد", "زن"]},
    {title: "آیا سابقه ی مصرف سیگار دارید؟", 
        options: ["بله", "خیر"]}
]

class CoughRecord extends React.Component{
    constructor(props) {
        super(props) ;
        this.state = {
            status: "Recording",
            situation: "",
            gender: "",
            smoke: "",  
            }
            this.setSituation = this.setSituation.bind(this);
            this.setGender = this.setGender.bind(this);
            this.setSmoke = this.setSmoke.bind(this);
            this.setStatus = this.setStatus.bind(this);

        }

    setSituation(_situation) {
        this.setState({
            situation: _situation,
            status: "Q2"
        }) ;
    }

    setGender(_gender) {
        this.setState({
            gender: _gender,
            status: "Q3"
        }) ;    
    }

    setSmoke(_smoke) {
        this.setState({
            smoke: _smoke,
            status: "Hint"
        }) ;
    }
    
    setStatus() {
        this.setState({
            status: "Recording"
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
                    <div className="record-body">
                        { (this.state.status === "Q1") ? <Question question={fa_questions[0]} func={this.setSituation} status={this.state.status}/> :
                            (this.state.status === "Q2") ? <Question question={fa_questions[1]} func={this.setGender} status={this.state.status}/>:
                            (this.state.status === "Q3") ? <Question question={fa_questions[2]} func={this.setSmoke}  status={this.state.status}/> :
                            (this.state.status === "Hint") ? <Hints lang="fa" func={this.setStatus}/> :
                            (this.state.status === "Recording") ? <Record lang="fa"/> : ""    
                        }
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
                    <div className="record-body en">
                        { (this.state.status === "Q1") ? <Question question={en_questions[0]} func={this.setSituation} status={this.state.status}/> :
                            (this.state.status === "Q2") ? <Question question={en_questions[1]} func={this.setGender} status={this.state.status}/>:
                            (this.state.status === "Q3") ? <Question question={en_questions[2]} func={this.setSmoke}  status={this.state.status}/> :
                            (this.state.status === "Hint") ? <Hints lang="en" func={this.setStatus}/> :
                            (this.state.status === "Recording") ? <Record lang="en"/> : ""
                        }
                    </div>
                </React.Fragment>
            );
        }


    }
}

class Question extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    handelChange(event){
        this.props.func(event.target.value)
    }

    render() {
        const question = this.props.question;

        var i;
        const items = [];
        for(i= 0; i< question.options.length; i++) {
            items.push(
                <div>   
                    <input type="radio" id={this.props.status + i.toString()} name={this.props.status} value={question.options[i]} onClick={this.handelChange.bind(this)}/>
                    <label for={this.props.status + i.toString()}>{question.options[i]}</label><br/>
                </div>
            )

        }
        return(
            <div className="question">
                <div>
                    <p className="question-title">{question.title}</p>
                </div>
                <div className="question-options">
                    <form className="question-form">
                        {items}
                        <br/>
                    </form>
                </div>
            </div>
        );
    }
}


class Hints extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    accept() {
        this.props.func()
    }

    render() {
        const lang = this.props.lang;
        
        if(lang === "fa"){   
            return (
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
                    <div className="accept-button" onClick={this.accept.bind(this)}>خب</div>                   
                </div>
            )
        } else {
            return(
                <div className="record en">
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
                    <div className="accept-button" onClick={this.accept.bind(this)}>Ok</div>
                </div>
            )
        }  
    }
}



class Record extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true,
            recorded: false,
            isRecording: false,
            blobURL: '',
            isBlocked: false,
        }
    }

    start = () => {   
        if(this.props.lang === "en") {
            document.getElementById("notife").innerText= "recording";
        } else {
            document.getElementById("notife").innerText= "درحال ضبط";
        }
        if (this.state.isBlocked) {
            console.log('Permission Denied');
        } else {
            Mp3Recorder
            .start()
            .then(() => {
                this.setState({ status: false, isRecording: true, recorded: false });
            }).catch((e) => console.error(e));
        }

      };

      stop = () => {
        document.getElementById("notife").innerText = "";
        Mp3Recorder
          .stop()
          .getMp3()
          .then(([buffer, blob]) => {
            const blobURL = URL.createObjectURL(blob)
            this.setState({ blobURL, isRecording: false, status: true, recorded: true });
          }).catch((e) => console.log(e));
      };


      submitVoice() {

      }

      cancelVoice() {
        this.setState({
            status: true,
            recorded: false,
            isRecording: false,
            blobURL: '',
            isBlocked: false,
        })
      }
      render() {
        const lang = this.props.lang;
        
        if(lang === "fa"){   
            return (
                <div className="record">
                    <div className="recorder">
                            <div className="control-button">
                                <div className="record-voice">
                                    <img src={Microphone} alt="mirophone" onClick={(this.state.status) ? this.start : this.stop} className="record-button"></img>
                                    <span id="notife" className="notife"></span>
                                </div>                                   
                                <div id="submit" className={(this.state.recorded) ? "submit-voice" : "submit-voice hidden"}>
                                    <button className="submit button" onClick={this.submitVoice.bind(this)}>ارسال</button>
                                    <button className="cancel button" onClick={this.cancelVoice.bind(this)}>انصراف</button>
                                </div>
                            </div><br/>
                    </div>
                </div>
            )
        } else {
            return(
                <div className="record en">
                    <div className="recorder">
                        <div className="control-button">
                            <div className="record-voice">
                                <img src={Microphone} alt="mirophone" onClick={(this.state.status) ? this.start : this.stop} className="record-button"></img>
                                <span id="notife" className="notife"></span>
                            </div>                                   
                            <div id="submit" className={(this.state.recorded) ? "submit-voice" : "submit-voice hidden"}>
                                <button className="submit button" onClick={this.submitVoice.bind(this)}>Submit</button>
                                <button className="cancel button" onClick={this.cancelVoice.bind(this)}>Cancel</button>
                            </div>
                        </div><br/>
                    </div>
                </div>
            )
        }   
      }

}



export default CoughRecord;