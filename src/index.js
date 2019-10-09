import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './containers/landing.js';
import * as serviceWorker from './serviceWorker';
import createStore from './createStore';

let store = createStore();

// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
// };

ReactDOM.render(<Landing store={store}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
