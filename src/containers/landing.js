import React, { Component } from 'react';
import InfoSlider from '../components/infoSlider';
import Introduction from '../components/introduction';
import '../styles/landing.css';
import TitleBar from "../components/titleBar";
import WorkHistory from "../components/workHistory";
// import WelcomeScreen from "../components/welcomeScreen";
import WelcomeScreen2 from "../components/welcomeScreen2";
import DownloadCV from "../components/downloadCV";

class Landing extends Component {
  componentDidMount() {
    this.scrollWait = 100;
    this.lastScrollFireTime = Date.now();
    window.addEventListener("scroll", this._showDownload.bind(this));
    this.welcomeScreen = document.getElementById('welcomeScreen');
    this.introduction = document.getElementById('introduction');
    this.slider = document.getElementById('slider');
    this.history = document.getElementById('history');
    this.downloadBtn = document.getElementById('downloadBtn');
  }

  componentWillUnmount() {
     window.removeEventListener("scroll", this._showDownload.bind(this));
  }

  _showDownload() {
    if ((this.lastScrollFireTime + this.scrollWait - Date.now()) < 0) {
      // if (this.welcomeScreen !== null && this.welcomeScreen !== undefined && this.downloadBtn !== null && this.downloadBtn !== undefined) {
      //   let bounding = this.welcomeScreen.getBoundingClientRect();
      //   if (bounding.top >= 0 && bounding.left >= 0 &&
      //     bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {
      //     this.downloadBtn.style.display = 'none';
      //   } else {
      //   	this.downloadBtn.style.display = 'block';
      //   }
      // }
      if (window.scrollY >= window.innerHeight){
        // this.downloadBtn.style.display = 'block';
        this.downloadBtn.style.visibility = 'visible';
        this.downloadBtn.style.opacity = '1';
      } else {
        // this.downloadBtn.style.display = 'none';
        this.downloadBtn.style.visibility = 'hidden';
        this.downloadBtn.style.opacity = '0';
      }
      this.lastScrollFireTime = Date.now();
    }
  }

  render(){
    return (
        <div className="mainContainer">
            {/*<WelcomeScreen/>*/}
            <WelcomeScreen2/>
            <TitleBar/>
            <Introduction />
            <InfoSlider store={this.props.store}/>
            <WorkHistory />
            <DownloadCV />
        </div>
    );
  }
}export default Landing;
