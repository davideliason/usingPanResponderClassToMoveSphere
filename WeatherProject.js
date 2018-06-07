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

import Forecast from './Forecast';

type Props = {};
export default class WeatherProject extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      zip: "",
      forecast: null
    };
  }

   _handleTextChange = event => {
    this.setState({ zip: event.nativeEvent.text });
   };

  render() {
     // let content = null;
     // if (this.state.forecast !== null) {
     //  content = (
     //    <Forecast
     //      main={this.state.forecast.main}
     //      description={this.state.forecast.description}
     //      temp={this.state.forecast.temp}
     //    />
     //  );

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
          <Forecast main="main" description="description" temp="100degrees" />
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
