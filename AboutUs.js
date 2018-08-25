import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, StatusBar} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default class AboutUs extends Component {
	render() {
		return(

			<View style={styles.container}>
				<StatusBar
					backgroundColor='#fff'
					barStyle='dark-content'
				/>

				<Text style={styles.text}>AboutUs</Text>
			</View>
		)
	}
};

const styles = new StyleSheet.create({

	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#b71c1c'
	},

	text: {
		justifyContent: 'center', 
		alignSelf: 'center', 
		padding: 20, 
		color: 'white'
	}
});