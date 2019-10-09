import React, {Component} from 'react';
import '../styles/welcomeScreen.css';

class WelcomeScreen extends Component {
    render() {
        return (
            <div className="welcomeContainer">
                <section className="intro">
                    <div className="content">
                        <div className="title">You can create full screen sections without javascript.</div>
                        <div className="content">The height is set to 90vh, that means 90% height.</div>
                    </div>
                </section>
            </div>
        );
    }
}

export default WelcomeScreen;