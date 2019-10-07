import React, { Component } from 'react';
import InfoSlider from '../components/infoSlider';
import '../styles/landing.css';

class Landing extends Component {
  render(){
    return (
      <InfoSlider store={this.props.store}/>
    );
  }
}export default Landing;
