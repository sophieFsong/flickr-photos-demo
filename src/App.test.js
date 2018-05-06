import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadPhotos} from './actions/photosActions';
const store = configureStore();
store.dispatch(loadPhotos());

it.only('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
