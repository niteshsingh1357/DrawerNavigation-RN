import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, ToolbarAndroid} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


const screenWidth = Dimensions.get('window').width;

export default class Home extends Component {
	render() {
		return(
			<View style={styles.container}>

				
				<Text style={styles.text}>Screen1</Text>
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