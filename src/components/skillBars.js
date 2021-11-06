import React, { Component } from 'react';
import {connect} from "react-redux";
import '../styles/skillBars.css';

const mapStateToProps = (state, ownProps) => {
    return {selectedSliderTabIndex: state.dm.selectedSliderTabIndex};
};

class SkillBars extends Component {
  constructor(props) {
      super(props);

      this.state={};
  }
  componentDidMount() {
      let store = this.props.store;
      let storeData = store.getState();

      this.setState({
          ...this.state,
          selectedSliderTabIndex: storeData.dm.selectedSliderTabIndex
      });
  }
  static getDerivedStateFromProps(nextProps, state) {
      let store = nextProps.store;
      let storeData = store.getState();

      if (nextProps && storeData) {
          state.selectedSliderTabIndex = storeData.dm.selectedSliderTabIndex;
          return state;
      }
      return null;
  }

  render() {
    let store = this.props.store;
    let storeData = store.getState();
    let selectedSlider = storeData.dm.selectedSliderTabIndex;

    let frontEnd = selectedSlider === 0 && (
      <div>
        <ul>
          <li><span className="html5"></span><em>HTML</em></li>
          <li><span className="css3"></span><em>CSS</em></li>
          <li><span className="js"></span><em>Javascript</em></li>
          <li><span className="ts"></span><em>Typescript</em></li>
          <li><span className="react"></span><em>React</em></li>
          <li><span className="electron"></span><em>Electron</em></li>
        </ul>
      </div>
    );

    let backend = selectedSlider === 1 && (
      <div>
        <ul>
          <li><span className="java"></span><em>Java</em></li>
          <li><span className="spring"></span><em>Spring</em></li>
          <li><span className="hibernate"></span><em>Hibernate</em></li>
          <li><span className="oracle"></span><em>Oracle</em></li>
          <li><span className="postgres"></span><em>Postgres</em></li>
        </ul>
      </div>
    );

    let others = selectedSlider === 2 && (
      <div>
        <ul>
          <li><span className="ansible"></span><em>Ansible</em></li>
          <li><span className="vagrant"></span><em>Vagrant</em></li>
          <li><span className="maven"></span><em>Maven</em></li>
          <li><span className="nginx"></span><em>Nginx</em></li>
          <li><span className="jenkins"></span><em>Jenkins</em></li>
        </ul>
      </div>
    );

    return (
      <div className="skillBarsContainer">
        <div className="skills" id="skills">
          {frontEnd}
          {backend}
          {others}
        </div>
      </div>
    );
  }

  elementInViewport(el) {
    let top = el.offsetTop;
    let left = el.offsetLeft;
    let width = el.offsetWidth;
    let height = el.offsetHeight;

    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top >= window.pageYOffset &&
      left >= window.pageXOffset &&
      (top + height) <= (window.pageYOffset + window.innerHeight) &&
      (left + width) <= (window.pageXOffset + window.innerWidth)
    );
  }
}
export default connect(mapStateToProps)(SkillBars);
