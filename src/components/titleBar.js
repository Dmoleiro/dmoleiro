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
                <div className="titlePhotoPopup">
                    <a href="https://github.com/Dmoleiro" target="_blank" rel="noopener noreferrer">
                        <img className="titleIcon" alt='github' src={process.env.PUBLIC_URL + '/assets/github.png'}/>
                    </a>
                    <a href="https://linkedin.com/in/daniel-m-ferreira" target="_blank" rel="noopener noreferrer">
                        <img className="titleIcon" alt='linkedin' src={process.env.PUBLIC_URL + '/assets/linkedin.png'}/>
                    </a>  
                </div>
                <div className="titlePhotoHoverText">hover me</div>
            </div>
        );
    }
}

export default TitleBar;
