import React, { Component } from 'react';
import {connect} from "react-redux";
import '../styles/infoSlider.css';
import {setSlideTabIndex} from "../actions/layoutActions";

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
                            <q>Frontend</q>
                            <span className="author">
                            <img alt='image1' src={process.env.PUBLIC_URL + '/assets/react.png'}/>
                            <img alt='image2' src={process.env.PUBLIC_URL + '/assets/redux.png'}/>
                            <img alt='image3' src={process.env.PUBLIC_URL + '/assets/es6.png'}/>
                            <img alt='image4' src={process.env.PUBLIC_URL + '/assets/html5.png'}/>
                            <img alt='image5' src={process.env.PUBLIC_URL + '/assets/css.png'}/>
                            <img alt='image6' src={process.env.PUBLIC_URL + '/assets/pixi.png'}/>
                            </span>
                            </p>
                        </li>
                        <li className="slide">
                            <p>
                                <q>Backend</q>
                                <span className="author">
                                <img alt='image7' src={process.env.PUBLIC_URL + '/assets/java.jpg'}/>
                                </span>
                            </p>
                        </li>
                        <li className="slide">
                            <p>
                            <q>Databases</q>
                            <span className="author">
                                <img alt='image8' src={process.env.PUBLIC_URL + '/assets/oracle.jpg'}/>
                                <img alt='image9' src={process.env.PUBLIC_URL + '/assets/postgres.png'}/>
                            </span>
                            </p>
                        </li>
                    </ul>
                    <div className="slidesNavigation">
                        <label htmlFor="radio-1" id="dotForRadio-1"></label>
                        <label htmlFor="radio-2" id="dotForRadio-2"></label>
                        <label htmlFor="radio-3" id="dotForRadio-3"></label>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(InfoSlider);
