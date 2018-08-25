import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, StatusBar} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default class Profile extends Component {
	render() {
		return(

			<View style={styles.container}>
				<StatusBar
					backgroundColor='#fff'
					barStyle='dark-content'
				/>

				<Text style={styles.text}>Profile</Text>
			</View>
		)
	}
};

const styles = new StyleSheet.create({

	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#283593'
	},

	text: {
		justifyContent: 'center', 
		alignSelf: 'center', 
		padding: 20, 
		color: 'white'
	}
});