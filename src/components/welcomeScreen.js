import React, {Component} from 'react';
import '../styles/welcomeScreen.css';

class WelcomeScreen extends Component {
    render() {
        return (
            <div className="welcomeContainer" id="welcomeScreen">
                <section className="intro">
                    <div className="content">
                        <div className="sp-container">
                        	<div className="sp-content">
                        		<h2 className="frame-1">Hey there, I am Daniel</h2>
                        		<h2 className="frame-2">and this is my resume</h2>
                        		<h2 className="frame-5">
                        			<span>scroll down</span>
                        			<span> for</span>
                        			<span> more</span>
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
