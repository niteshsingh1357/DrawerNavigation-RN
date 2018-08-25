/** @format */
import React, { Component } from 'react';
import {AppRegistry, Dimensions} from 'react-native';
import {Platform, StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';

import {name as appName} from './app.json';
import {createDrawerNavigator} from 'react-navigation';
import Home from './Home';
import Icon from 'react-native-vector-icons/Ionicons';
import drawernav from './routes';

import Profile from './Profile';

const App = () => {
	<View>
		<StatusBar
			backgroundColor='#fff'
			barStyle='dark-content'
			/>
		<drawernav/>
	</View>
};

 export default App;
AppRegistry.registerComponent(appName, () => drawernav);
