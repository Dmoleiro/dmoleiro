import React, { Component } from 'react';
import InfoSlider from '../components/infoSlider';
import Introduction from '../components/introduction';
import '../styles/landing.css';
import TitleBar from "../components/titleBar";
import WorkHistory from "../components/workHistory";
import WelcomeScreen from "../components/welcomeScreen";

class Landing extends Component {
  render(){
    return (
        <div className="mainContainer">
            <WelcomeScreen/>
            <TitleBar/>
            <Introduction />
            <InfoSlider store={this.props.store}/>
            <WorkHistory />
        </div>
    );
  }
}export default Landing;
