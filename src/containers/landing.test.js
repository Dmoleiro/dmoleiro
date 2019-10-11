import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './landing';
import createStore from '../createStore';

it('renders without crashing', () => {
  const div = document.createElement('div');
  let store = createStore();
  ReactDOM.render(<Landing store={store}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
