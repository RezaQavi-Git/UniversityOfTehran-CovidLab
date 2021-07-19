import React from 'react';

import './cough-record-styles.css';
import '../../common/common.css'


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
                        <p >Record Voice</p>
                    </div>
                    <div className="title-description">
                        <p >Accompany us in a more accurate answer by filling in the details below</p>
                    </div>
                </div><br/>
                <div className="questions">
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

                </div>
                {/* https://github.com/sivaprakashDesingu/react-voice-recorder/tree/master/src/imgs */}
                <div className="record">
                    <div className="recorder">
                        <audio src={this.state.blobURL} controls="controls" className="record-player" />
                        <div className="control-buttom">
                            <button className="submit-buttom">submit</button>
                            <button onClick={this.stop} disabled={!this.state.isRecording} className="record-buttom stop">stop</button>
                            <button onClick={this.start} disabled={this.state.isRecording} className="record-buttom">start</button>
                        </div>
                    </div>
                    <div className="hints">
                        <p> To record the sound of a cough, please do so in a quiet environment as much as possible </p>
                        <p> Also, when using this program, please follow the health tips. For example: </p>
                        <ol className="health-tips">
                            <li> 1. Disinfect your phone or tablet properly after use. </li>
                            <li> 2. Avoid coughing in front of others. </li>
                            <li> 3. If you are recording a coughing sound from others, keep the appropriate distance and use a mask. </li>
                        </ol>
                    </div>
                    
                </div>
            </React.Fragment>
        );
    }
}

export default CoughRecord;