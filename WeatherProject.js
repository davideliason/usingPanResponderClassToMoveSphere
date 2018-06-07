/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class WeatherProject extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      zip: ""
    };
  }

   _handleTextChange = event => {
    this.setState({ zip: event.nativeEvent.text });
   };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Weather App</Text>
        <Text style={styles.versionStyle}>version 0.1.0</Text>
        <Text style={styles.welcome}>
          You input {this.state.zip}.
        </Text>
        <TextInput
          style={styles.input}
          onSubmitEditing={this._handleTextChange} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'deepskyblue',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  versionStyle: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40
  },
});
