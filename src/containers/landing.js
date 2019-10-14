import React, { Component } from 'react';
import InfoSlider from '../components/infoSlider';
import Introduction from '../components/introduction';
import '../styles/landing.css';
import TitleBar from "../components/titleBar";
import WorkHistory from "../components/workHistory";
import WelcomeScreen from "../components/welcomeScreen";
import DownloadCV from "../components/downloadCV";

class Landing extends Component {
  componentDidMount() {
    this.scrollWait = 1000;
    this.lastScrollFireTime = Date.now();
    window.addEventListener("scroll", this._showDownload.bind(this));
  }

  componentWillUnmount() {
     window.removeEventListener("scroll", this._showDownload.bind(this));
  }

  _showDownload() {
    if ((this.lastScrollFireTime + this.scrollWait - Date.now()) < 0) {
      let titleBar = document.getElementById('title-bar');
      if (titleBar !== null && titleBar !== undefined) {
        let bounding = titleBar.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.left >= 0 &&
          bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {
        	console.log('In the viewport!');
        } else {
        	console.log('Not in the viewport... whomp whomp');
        }
      }
      this.lastScrollFireTime = Date.now();
    }
  }

  render(){
    return (
        <div className="mainContainer">
            <WelcomeScreen/>
            <TitleBar/>
            <Introduction />
            <InfoSlider store={this.props.store}/>
            <WorkHistory />
            <DownloadCV />
        </div>
    );
  }
}export default Landing;
