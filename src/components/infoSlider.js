import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import '../styles/infoSlider.css';
import {setSlideTabIndex} from "../actions/layoutActions";

const mapStateToProps = (state, ownProps) => {
    return {selectedSliderTabIndex: state.dm.selectedSliderTabIndex};
};

class InfoSlider extends Component {
    constructor(props) {
        super(props);

        let store = this.props.store;
        let storeData = store.getState();

        this.state = {
            selectedSliderTabIndex: storeData.dm.selectedSliderTabIndex
        };
    }

    componentWillReceiveProps(nextProps) {
        let store = nextProps.store;
        let storeData = store.getState();

        if (nextProps && storeData) {
            this.setState({
                ...this.state,
                selectedSliderTabIndex: storeData.dm.selectedSliderTabIndex
            });
        }
    }

    _selectSlider(index, store) {
        if (index !== undefined && store !== undefined) {
            store.dispatch(setSlideTabIndex(index));
        }
    }
    render() {
        return (
            <div>
                <h1>Css Only Carousel</h1>
                <div className="carrousel">
                    <h2>Title</h2>
                    <input type="radio" name="slides" id="radio-1" onClick={() => this._selectSlider(0, this.props.store)} defaultChecked/>
                    <input type="radio" name="slides" id="radio-2" onClick={() => this._selectSlider(1, this.props.store)}/>
                    <input type="radio" name="slides" id="radio-3" onClick={() => this._selectSlider(2, this.props.store)}/>
                    <input type="radio" name="slides" id="radio-4" onClick={() => this._selectSlider(3, this.props.store)}/>
                    <input type="radio" name="slides" id="radio-5" onClick={() => this._selectSlider(4, this.props.store)}/>
                    <ul className="slides">
                        <li className="slide">
                            <p>
                            <q>It was a pleasure to work with him</q>
                            <span className="author">
                            <img alt='image1' src="https://th.thgim.com/news/international/m1m01s/article26984481.ece/alternates/FREE_300/30TH-TOLKIEN"/>
                            JR Tolkien
                            </span>
                            </p>
                        </li>
                            <li className="slide">
                            <p>
                                <q>He is a good friend of mine</q>
                                <span className="author">
                                <img alt='image2' src="https://i.pinimg.com/736x/3f/c5/87/3fc587af121759209c53132a71c03c97--record-player-swing.jpg"/>
                                Sinatra
                                </span>
                            </p>
                        </li>
                        <li className="slide">
                            <p>
                                <q>This is pretty cool</q>
                                <span className="author">
                                <img alt='image3' src="https://pbs.twimg.com/profile_images/1832861297/GordonShumway12.jpg"/>
                                Alf
                                </span>
                            </p>
                        </li>
                        <li className="slide">
                            <p>
                            <q>This is awesome. Only Css you say?</q>
                            <span className="author">
                                <img alt='image4' src="http://www.claudiobernasconi.ch/wp-content/uploads/2014/03/github_octocat-300x300.jpg"/>
                                The octocat
                            </span>
                            </p>
                        </li>
                        <li className="slide">
                            <p>
                            <q>This is awesome. Only Css you say?</q>
                            <span className="author">
                                <img alt='image4' src="http://www.claudiobernasconi.ch/wp-content/uploads/2014/03/github_octocat-300x300.jpg"/>
                                The octocat
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
