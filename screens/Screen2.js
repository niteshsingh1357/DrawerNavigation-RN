import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, StatusBar} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from 'react-navigation';


const screenWidth = Dimensions.get('window').width;

export default class Home extends Component {
	render() {
		return(

			<View style={styles.container}>
				<StatusBar
					backgroundColor='#fff'
					barStyle='dark-content'
				/>

				
				<Text style={styles.text}>Screen2</Text>
			</View>
		);
	}
};

const styles = new StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: '#2196F3'
	},

	text: {
		justifyContent: 'center', 
		alignSelf: 'center', 
		padding: 20, 
		color: 'white'
	}
});