import React, {Component} from 'react';
import '../styles/titleBar.css';

class TitleBar extends Component {
    render() {
        return (
            <div className="titleBarContainer" id="title-bar">
                <div className="titleBarName">
                    Daniel Ferreira
                </div>
                <div className="titlePosititon">
                    {/*Javascript developer / Team Leader*/}
                    Javascript developer
                </div>
                <hr className="horizontalBreak"/>
                <div className="titleAddress">
                    Lisbon
                </div>
                <div className="titleContacts">
                    danielmoleiro@gmail.com
                </div>
                <img className="titlePhoto" alt='image20' src={process.env.PUBLIC_URL + '/assets/photo.png'}/>
            </div>
        );
    }
}

export default TitleBar;
