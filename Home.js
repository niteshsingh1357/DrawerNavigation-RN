import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, Button, StatusBar, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Screen1 from './screens/Screen1';

const screenWidth = Dimensions.get('window').width;

export default class Home extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return(
			<View style={styles.container} >
				<StatusBar
					backgroundColor='#fff'
					barStyle='dark-content'
				/>
				<Text style={styles.text}>Home Screen</Text>

				<TouchableOpacity 
		          style={styles.button}
		          activeOpacity={0.8}
		          onPress={() => this.props.navigation.navigate('Screen1')}>
		            <Text style={styles.buttonText}>Go to Screen1</Text>
		        </TouchableOpacity>

				
		        
			</View>
		);
	}
};

const styles = new StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: '#2196F3',
		justifyContent: 'center',
		
	},

	text: {
		justifyContent: 'center', 
		alignSelf: 'center',
		alignSelf: 'center', 
		padding: 20, 
		color: 'white'
	},

	button: {
	    backgroundColor: '#fff',
	    height: 45,
	    width: screenWidth-40,
	    flexDirection: 'row',
	    borderColor: '#263238',
	    borderWidth: 0,
	    padding: 10,
	    alignSelf: 'center',
	    justifyContent: 'center',
	    marginBottom: 10,
	    marginTop: 10,
	    borderRadius: 8,
	},

  buttonText: {
	    color: 'black',
	    fontSize: 18,
	    alignSelf: 'center',
  },

});