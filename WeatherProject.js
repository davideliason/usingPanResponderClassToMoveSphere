import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Image,
  Button,
  TouchableHighlight
} from 'react-native';

import Forecast from './Forecast';
import OpenWeatherMap from "./open_weather_map";

export default class WeatherProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: "",
      count: 0,
      pressing: false,
      forecast: {
        main: "Portland",
        description: "changing constantly",
        temp: "cold then hot"
      }
    };
  }

   _onPressIn = () => {
    this.setState({ pressing: true });
  };

  _onPressOut = () => {
    this.setState({ pressing: false });
  };

   _handleTextChange = event => {
    let zip = event.nativeEvent.text;
    OpenWeatherMap.fetchForecast(zip).then(forecast => {
    console.log(forecast);
    this.setState({ forecast: forecast,
                    zip : zip });

  });
};

 _handlePress = () => {
    this.setState({
      count: this.state.count+1
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./clouds.jpeg')}
          resizeMode='cover'// or cover
          style={styles.backdrop}> // must be passed from the parent, the number may vary depending upon your screen size

        <View style={styles.overlay}>
         <View style={styles.row}>
           <Text style={styles.mainText}>Weather App</Text>
           <Text style={styles.versionStyle}>version 0.1.0</Text>
           <View style={styles.zipContainer}>
            <TextInput
              style={styles.input}
              placeholder="zipcode"
              onSubmitEditing={this._handleTextChange} />
           </View>
        </View>
            <Forecast
              main={this.state.forecast.main}
              description={this.state.forecast.description}
              temp={this.state.forecast.temp}
             />
      </View>
      
       <TouchableHighlight
        style={styles.button}
        onPress={this._handlePress}
        onPressIn = {this._onPressIn}
        onPressOut = {this._onPressOut}
       >
          <View>
              <Text style={styles.welcome}>
                  {this.state.pressing ? "Pressed" : "Not Pressed"}
              </Text>
          </View>
       </TouchableHighlight>


      <Text> {this.state.count} </Text>

      </ImageBackground>
    </View>
    );
  }
}

const baseFontSize = 16;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingTop: 30 },
  backdrop: { flex: 1, flexDirection: "column" },
  overlay: {
    paddingTop: 5,
    backgroundColor: "#000000",
    opacity: 0.5,
    flexDirection: "column",
    alignItems: "center"
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 20
  },
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    padding: 30
  },
  input: {
    width: 40,
    color: "white"
  },
  zipContainer: {
    height: baseFontSize + 10,
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
  },
  zipCode: { flex: 1, flexBasis: 1, width: 50, height: baseFontSize },
  mainText: { fontSize: baseFontSize, color: "#FFFFFF" },
   welcome: { fontSize: 20, textAlign: "center", margin: 10, color: "#FFFFFF" },
  versionStyle: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 5,
  },
});


