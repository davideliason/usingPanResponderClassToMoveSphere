import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import Forecast from './Forecast';
import OpenWeatherMap from "./open_weather_map";

export default class WeatherProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: "",
      forecast: {
        main: "main_state",
        description: "description_text",
        temp: "temp_data"
      }
    };
  }

   // _handleTextChangePrototype = event => {
   //  this.setState({ zip: event.nativeEvent.text });
   // };

   _handleTextChange = event => {
    let zip = event.nativeEvent.text;
    OpenWeatherMap.fetchForecast(zip).then(forecast => {
    console.log(forecast);
    this.setState({ forecast: forecast,
                    zip : zip });

  });
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
         <Forecast
            main={this.state.forecast.main}
            description={this.state.forecast.description}
            temp={this.state.forecast.temp}
         />
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
    fontSize: 5,
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    padding: 2,
    height: 40,
    width: 100,
    textAlign: "center"
  },
});
