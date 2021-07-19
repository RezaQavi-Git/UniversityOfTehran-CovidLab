import React from 'react';
import { Link } from 'react-router-dom';

import './record-box-styles.css'

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
                    <div className="description-box-record">
                        <Link to="/record/en"> <img src="https://img.icons8.com/ios/50/4a90e2/play-record--v2.png" className="microphone" alt="mic"/>  </Link> 
                        <p>Record Voice</p>
                    </div>
                    <div className="description-box-description">
                        <p>
                        Yazd, with a population of 1.2 million, has 10 cities. According to the university spokesman, the trend of spreading the corona virus, which causes Covid 19 disease, is increasing in the province.
                        Currently, the health status of 9 out of 10 cities in Yazd province is in red due to the increase in the prevalence of coronavirus, and only Ashkzar city is orange.
                        According to IRNA, the coronavirus, which causes Covid 19 disease, has been observed in Wuhan, China since late 2019 and was spread around the world in a short time; So that the World Health Organization in March (February 2020) confirmed the outbreak of a pandemic (global epidemic) of this disease Corona
                        The virus is transmitted to infected people through infected hands or sneezing, coughing and even respiratory drops through the mouth, nose and eyes. Shortness of breath, fatigue and body aches, olfactory and taste disturbances, and gastrointestinal problems are some of the symptoms of Covid 19 disease, and more than 80% of those infected with the virus also develop a mild illness.
                        </p>
                    </div>
                    
                </div>
            </React.Fragment>
        )
    }

}

export default RecordBox;