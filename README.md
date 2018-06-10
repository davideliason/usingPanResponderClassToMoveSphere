## Weather App
### using React Native
#### [David Eliason](http://www.davethemaker.com)
version 0.2.0

version 0.2.0 : use fetch and promises to access openweather api based on user inputted zipcode to render the returned JSON object data fields of temperature, description. The parent wrapper component holds the state and also calls the OpenWeatherAPI component which fetches the data  which then updates state; the child Forecast component uses the state data via props to display rendered and updated data

## To Use

This is a version that does not use Create React Native App, so it's much more of a native approach to building an app. Here we fully installed React Native and all of its dependencies.

[React Native Docs](https://facebook.github.io/react-native/)

- need node.js, React Native, Xcode (for macos dev't)

Terminal:

$ npm i -g react-native-cli   // get the tools
$ react-native init Example project // to actually build from scratch
$ cd Example  
$ react-native run-ios  // run that sucker
* for this repo, $ react-native run-ios within weatherAppRN folder
