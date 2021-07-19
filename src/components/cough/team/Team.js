import React from 'react';

import './team-styles.css'

import DRMORADI from '../../static/images/DrhadiMoradi.jpg';

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        
        return(
            <React.Fragment>
                <br></br>
                <br></br>
                <div id="team" className="team">
                    <div className="team-member">
                        <img className="team-member-img" src={DRMORADI} alt="dr hadi moradi" />
                        <p className="team-member-name">دکتر هادی مرادی</p><br/>
                        <p className="team-member-title">رئیس گروه ازمایشگاه</p> 
                    </div>
                    <div className="team-member">
                        <img className="team-member-img" src={DRMORADI} alt="dr hadi moradi" />
                        <p className="team-member-name" >دکتر هادی مرادی</p><br/>
                        <p className="team-member-title">رئیس گروه ازمایشگاه</p> 
                    </div>
                    <div className="team-member">
                        <img className="team-member-img" src={DRMORADI} alt="dr hadi moradi" />
                        <p className="team-member-name">دکتر هادی مرادی</p><br/>
                        <p className="team-member-title">رئیس گروه ازمایشگاه</p> 
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default Team;