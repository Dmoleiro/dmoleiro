import React, {Component} from 'react';
import '../styles/titleBar.css';

class TitleBar extends Component {
    render() {
        return (
            <div className="titleBarContainer">
                <div className="titleBarName">
                    E Pluribus Unum
                </div>
                <div className="titlePosititon">
                    {/*Javascript developer / Team Leader*/}
                    Ipsum Lorem / Lorem Ipsum
                </div>
                <hr className="horizontalBreak"/>
                <div className="titleAddress">
                    Street no 5, jdssddsds oeodkdkd R/C-E kdsjds ww ikjopi
                </div>
                <div className="titleContacts">
                    jdakjdajka@mail.com
                </div>
            </div>
        );
    }
}

export default TitleBar;