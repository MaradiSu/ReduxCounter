
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './src/App.js';

export default class wishmeapp extends Component {
  render() {
    return (
      <App />
    );
  }
}
AppRegistry.registerComponent('wishmeapp', () => wishmeapp);
