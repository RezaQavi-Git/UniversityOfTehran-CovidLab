import React from 'react';

import './about-styles.css'

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
                    <div className="about-img">
                        <img src={ROBOLAB} alt="robolab" className="about-image"/>
                    </div>
                    <div className="about-description" >
                        <p>
                        Zaid - IRNA - The spokesman of Shahid Sadoughi University of Medical Sciences in Yazd said: "Currently, 811 people are hospitalized in the province's hospitals due to Covid 19 disease, of which 136 people are in the intensive care unit (ICU)." Provide use
                        </p>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default About;