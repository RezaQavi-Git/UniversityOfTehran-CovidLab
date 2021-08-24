import React from "react";
import $ from "jquery";

import "./cough-record.css";
import { ReactMic } from "react-mic";
import Microphone from "../../static/images/microphone.png";

const en_questions = [
  {
    title: "Please specify your status",
    options: [
      "Definitive diagnosis of Covid 19",
      "Suspicious of Covid 19",
      "Other diseases",
      "Healthy",
    ],
  },
  { title: "Please specify your gender", options: ["Male", "Female"] },
  { title: "Do you have a history of smoking?", options: ["Yes", "No"] },
];

const fa_questions = [
  {
    title: "لطفا وضعیت خود را مشخص کنید",
    options: [
      "تشخیص قطعی کووید19",
      "مشکوک به کووید19",
      "بیماری های دیگر",
      "سالم",
    ],
  },
  { title: "لطفا جنسیت خود را مشخص کنید", options: ["مرد", "زن"] },
  { title: "آیا سابقه ی مصرف سیگار دارید؟", options: ["بله", "خیر"] },
];

class CoughRecord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "Q1",
      situation: "",
      gender: "",
      smoke: "",
    };
    this.setSituation = this.setSituation.bind(this);
    this.setGender = this.setGender.bind(this);
    this.setSmoke = this.setSmoke.bind(this);
    this.setStatus = this.setStatus.bind(this);
  }

  componentDidMount() {
    // const lang = this.props.lang;
    // const title = lang === "fa" ? "ضبط صدای سرفه" : "Record Voice";
    // const dir = lang === "fa" ? "rtl" : "ltr";

    // document.title = title;
    // $("body").attr("dir", dir);
  }

  setSituation(_situation) {
    this.setState({
      situation: _situation,
      status: "Q2",
    });
  }

  setGender(_gender) {
    this.setState({
      gender: _gender,
      status: "Q3",
    });
  }

  setSmoke(_smoke) {
    this.setState({
      smoke: _smoke,
      status: "Hint",
    });
  }

  setStatus() {
    this.setState({
      status: "Recording",
    });
  }

  render() {
    const lang = this.props.lang;
    return (
      <React.Fragment>
        <br />
        <div className="title">
          <div className="title-head">
            <p>{lang === "fa" ? "ضبط صدا" : "Record Voice"}</p>
          </div>
          <div className="title-description">
            <p>
              {lang === "fa"
                ? "با ضبط و ارسال صدای سرفه‌ی خود یا دیگران میتوانید به تحقیقات در جهت تشخیص سریع‌تر بیماری Covid-19 کمک نمایید."
                : "You can help research for a faster diagnosis of Covid-19 by recording and sending the coughing sound of yourself or others."}
            </p>
          </div>
        </div>
        <br />
        <div className={"record-body " + lang}>
          {this.state.status === "Q1" ? (
            <Question
              lang={lang}
              question={lang === "fa" ? fa_questions[0] : en_questions[0]}
              func={this.setSituation}
              status={this.state.status}
            />
          ) : this.state.status === "Q2" ? (
            <Question
              lang={lang}
              question={lang === "fa" ? fa_questions[1] : en_questions[1]}
              func={this.setGender}
              status={this.state.status}
            />
          ) : this.state.status === "Q3" ? (
            <Question
              lang={lang}
              question={lang === "fa" ? fa_questions[2] : en_questions[2]}
              func={this.setSmoke}
              status={this.state.status}
            />
          ) : this.state.status === "Hint" ? (
            <Hints lang={lang} func={this.setStatus} />
          ) : this.state.status === "Recording" ? (
            <Record lang={lang} />
          ) : (
            ""
          )}
        </div>
      </React.Fragment>
    );
  }
}

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handelChange(event) {
    this.props.func(event.target.value);
  }

  render() {
    const question = this.props.question;

    var i;
    const items = [];
    for (i = 0; i < question.options.length; i++) {
      items.push(
        <div>
          <input
            type="radio"
            className="big-button"
            id={this.props.status + i.toString()}
            name={this.props.status}
            value={question.options[i]}
            onClick={this.handelChange.bind(this)}
          />
          <label for={this.props.status + i.toString()}>
            {question.options[i]}
          </label>
          <br />
        </div>
      );
    }
    return (
      <div className="question">
        <div>
          <p className="question-title">{question.title}</p>
        </div>
        <div className="question-options">
          <form className="question-form">
            {items}
            <br />
          </form>
        </div>
      </div>
    );
  }
}

class Hints extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  accept() {
    this.props.func();
  }

  render() {
    const lang = this.props.lang;

    return (
      <div className={"record " + lang}>
        <div className={"hints " + lang}>
          <div className={lang}>
            <p>
              {lang === "fa"
                ? "برای ضبط صدای سرفه لطفا تا حد امکان در محیطی ساکت اینکار را انجام دهید"
                : "To record the sound of a cough, please do so in a quiet environment as much as possible"}
            </p>
            <p>
              {lang === "fa"
                ? "همچنین در استفاده از این برنامه لطفا نکات بهداشتی را رعایت کنید. برای مثال:"
                : "Also, when using this program, please follow the health tips. For example:"}
            </p>
            <ol className="health-tips">
              <li>
                {lang === "fa"
                  ? "۱. تلفن یا تبلت خود را پس از استفاده, به روش صحیح, ضدعفونی کنید."
                  : "1. Disinfect your phone or tablet properly after use."}
              </li>
              <li>
                {lang === "fa"
                  ? "۲. از سرفه در حضور دیگران پرهیز کنید. "
                  : "2. Avoid coughing in front of others."}
              </li>
              <li>
                {lang === "fa"
                  ? "۳. اگر از دیگران صدای سرفه ضبط میکنید فاصله مناسب را رعایت کرده و از ماسک استفاده کنید."
                  : "3. If you are recording a coughing sound from others, keep the appropriate distance and use a mask."}
              </li>
            </ol>
          </div>
        </div>
        <div className="accept-button" onClick={this.accept.bind(this)}>
          {lang === "fa" ? "خب" : "Ok"}
        </div>
      </div>
    );
  }
}

class Record extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      recorded: false,
      isRecording: false,
      blobURL: "",
      isBlocked: false,
      timerOn: false,
      timerStart: 0,
      timerTime: 0,
    };
  }

  componentDidMount() {
    navigator.getUserMedia(
      { audio: true },
      () => {
        console.log("Permission Granted");
        this.setState({ isBlocked: false });
      },
      () => {
        console.log("Permission Denied");
        this.setState({ isBlocked: true });
      }
    );
  }

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime,
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart,
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0,
    });
  };

  start = () => {
    if (this.state.isBlocked) {
      alert("microphone is blocked!");
    } else {
      this.startTimer();
      this.setState({
        status: false,
        recorded: false,
        record: true,
        isRecording: true,
      });
    }
  };

  stop = () => {
    this.stopTimer();
    this.setState({
      isRecording: false,
      status: true,
      recorded: true,
      record: false,
      isRecording: false,
    });
    this.resetTimer();
  };

  showAcceptButtun() {
    
  }

  cancelVoice() {
    // document.getElementById("cry-question-body").style.display = "none";
    this.resetTimer();
    this.setState({
      status: true,
      recorded: false,
      blobURL: null,
      record: false,
    });
  }

  onStop(recordedBlob) {
    this.setState({
      blobURL: recordedBlob.blobURL,
    });
  }

  render() {
    const lang = this.props.lang;
    const { timerTime } = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    return (
      <div className="record">
        <div className="recorder">
          <div className="record-voice">
            <ReactMic
              record={this.state.record}
              className="record-wave"
              onStop={this.onStop.bind(this)}
              strokeColor="#000000"
              mimeType="audio/wav"
              bitRate={256000}
              sampleRate={44100}
            />
            <img
              src={Microphone}
              alt="mirophone"
              onClick={this.state.status ? this.start : this.stop}
              className="record-button"
            />
            <div
              className={
                this.state.timerOn | this.state.recorded ? "timer" : "hidden"
              }
            >
              {lang === "fa"
                ? seconds + ":" + centiseconds
                : seconds + ":" + centiseconds}
            </div>
            <audio
              src={this.state.blobURL}
              controls="controls"
              className={this.state.recorded ? "record-player" : "hidden"}
            />
          </div>
          <div
            id="submit"
            className={this.state.recorded ? "submit-voice" : "hidden"}
          >
            <p className="notife ">
              {lang === "fa"
                ? "آیا صدای ضبط شده مورد تایید شماست؟"
                : "Do you approve of the recorded sound ? "}
            </p>
            <div className="submit-voice-buttons">
              <button
                className="submit button"
                onClick={this.showAcceptButtun.bind(this)}
              >
                {lang === "fa" ? "بله" : "Yes"}
              </button>
              <button
                className="cancel button"
                onClick={this.cancelVoice.bind(this)}
              >
                {lang === "fa" ? "انصراف" : "Cancel"}
              </button>
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default CoughRecord;
