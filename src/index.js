import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store';
import "./App.css";

class Root extends PureComponent {
  render() {
    return (
      <Provider store={configureStore()}>
        <App />
      </Provider>
    )
  }
}

render(<Root />, document.getElementById('root'));
