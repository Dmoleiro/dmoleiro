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
                        		<h2 className="frame-1">ABCDE</h2>
                        		<h2 className="frame-2">FGHI</h2>
                        		<h2 className="frame-5">
                        			<span>ABC,</span>
                        			<span>DEF,</span>
                        			<span>GHI.</span>
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
