import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import AppNav from './src/nav/router';

export default class App extends Component {
  render() {
    return <AppNav/>;
  }
}

