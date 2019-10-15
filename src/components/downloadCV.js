//V-DanielFerreira.pdf
import React, { Component } from 'react';
import '../styles/downloadCV.css';

class DownloadCV extends Component {
  _downloadCV() {
    window.location.href = (process.env.PUBLIC_URL + '/assets/CV-DanielFerreira.pdf');
  }
  render() {
    return (
      <div className="triangle-bottomright" id="downloadBtn">
        <div className="triangleText" onClick={() => this._downloadCV()}>
          Download CV
        </div>
      </div>
    );
  }
}
export default DownloadCV;
