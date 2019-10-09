import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import '../styles/infoSlider.css';
import {setSlideTabIndex} from "../actions/layoutActions";

import java from '../assets/java.jpg';
import oracle from '../assets/oracle.jpg';
import postgres from '../assets/postgres.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';

const mapStateToProps = (state, ownProps) => {
    return {selectedSliderTabIndex: state.dm.selectedSliderTabIndex};
};

class InfoSlider extends Component {
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

        this._setAutoSlider();
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

    _selectSlider(index, store, isUserCommand = false) {
        // automatically disable auto slider when user interaction occurs

        if (isUserCommand) {
            this._disableAutoSlider();
        }

        if (index !== undefined && store !== undefined) {
            store.dispatch(setSlideTabIndex(index));
        }
    }

    _setAutoSlider() {
        if (this.state.autoSlider === undefined) {
            this.autoSlider = setInterval(() => {
                let selectedSliderTabIndex = this.state.selectedSliderTabIndex;
                if (selectedSliderTabIndex === 4) {
                    selectedSliderTabIndex = 0;
                } else {
                    selectedSliderTabIndex++;
                }
                this._selectSlider(selectedSliderTabIndex, this.props.store);
            }, 2000);
        }
    }

    _disableAutoSlider() {
        if (this.autoSlider !== undefined) {
            clearInterval(this.autoSlider);
            this.autoSlider = undefined;
        }
    }

    render() {
        let store = this.props.store;
        let storeData = store.getState();
        let selectedSlider = storeData.dm.selectedSliderTabIndex;
        return (
            <div className="sliderContainer">
                <div className="carrousel">
                    <h2>Skills</h2>
                    <input type="radio" name="slides" id="radio-1" onClick={() => this._selectSlider(0, this.props.store, true)} checked={selectedSlider === 0} readOnly={true}/>
                    <input type="radio" name="slides" id="radio-2" onClick={() => this._selectSlider(1, this.props.store, true)} checked={selectedSlider === 1} readOnly={true}/>
                    <input type="radio" name="slides" id="radio-3" onClick={() => this._selectSlider(2, this.props.store, true)} checked={selectedSlider === 2} readOnly={true}/>
                    <input type="radio" name="slides" id="radio-4" onClick={() => this._selectSlider(3, this.props.store, true)} checked={selectedSlider === 3} readOnly={true}/>
                    <input type="radio" name="slides" id="radio-5" onClick={() => this._selectSlider(4, this.props.store, true)} checked={selectedSlider === 4} readOnly={true}/>
                    <ul className="slides">
                        <li className="slide">
                            <p>
                            <q>React JS</q>
                            <span className="author">
                            <img alt='image1' src={react}/>
                            3 years
                            </span>
                            </p>
                        </li>
                            <li className="slide">
                            <p>
                                <q>Redux JS</q>
                                <span className="author">
                                <img alt='image2' src={redux}/>
                                3 years
                                </span>
                            </p>
                        </li>
                        <li className="slide">
                            <p>
                                <q>Java</q>
                                <span className="author">
                                <img alt='image3' src={java}/>
                                4 years
                                </span>
                            </p>
                        </li>
                        <li className="slide">
                            <p>
                            <q>Oracle</q>
                            <span className="author">
                                <img alt='image4' src={oracle}/>
                                4 years
                            </span>
                            </p>
                        </li>
                        <li className="slide">
                            <p>
                            <q>Postgres</q>
                            <span className="author">
                                <img alt='image4' src={postgres}/>
                                4 years
                            </span>
                            </p>
                        </li>
                    </ul>
                    <div className="slidesNavigation">
                        <label htmlFor="radio-1" id="dotForRadio-1"></label>
                        <label htmlFor="radio-2" id="dotForRadio-2"></label>
                        <label htmlFor="radio-3" id="dotForRadio-3"></label>
                        <label htmlFor="radio-4" id="dotForRadio-4"></label>
                        <label htmlFor="radio-5" id="dotForRadio-5"></label>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(InfoSlider);
