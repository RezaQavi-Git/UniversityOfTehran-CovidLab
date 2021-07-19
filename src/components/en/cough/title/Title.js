import React from 'react';

import './title-styles.css'

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
                    Detection of Covid 19 by coughing sound
                    </p>
                    <p className="title-description">
                    Yazd - IRNA - The spokesman of Shahid Sadoughi University of Medical Sciences in Yazd said: "Currently, 811 people are hospitalized in the province due to Covid 19 disease, of which 136 people are in the ICU intensive care unit of medical services." Is presented.
                    </p>
                </div>
                <br></br>
                <div className="title-buttom">
                    <a className="title-team-buttom" href="#team">Team</a>
                    <a className="title-about-buttom" href="#about">About us</a>        
                </div>
            </React.Fragment>
        )
    }

}

export default Title;