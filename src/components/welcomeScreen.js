import React, {Component} from 'react';
import '../styles/welcomeScreen.css';

class WelcomeScreen extends Component {
    render() {
        return (
            <div className="welcomeContainer">
                <section className="intro">
                    <div className="content">
                        <div className="sp-container">
                        	<div className="sp-content">
                        		<div className="sp-globe"></div>
                        		<h2 className="frame-1">WELCOME</h2>
                        		<h2 className="frame-2">TO DMOLEIRO</h2>
                        		<h2 className="frame-5">
                        			<span>CODE,</span>
                        			<span>SLEEP,</span>
                        			<span>REPEAT.</span>
                        		</h2>
                        	</div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default WelcomeScreen;
