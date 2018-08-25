import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Platform, StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {StackNavigator, DrawerNavigator, NavigationActions} from 'react-navigation';
import Settings from './Settings';
const screenWidth = Dimensions.get('window').width;

export default class SideMenu extends Component {

	navigateToScreen = (route) => () => {
		const navigateAction = NavigationActions.navigate({
			routeName: route
		});
		this.props.navigation.dispatch(navigateAction);
	}

	render () {

		return(
			<View style={styles.container}>
				<Text style={{padding:10, color:'black'}} onPress={ () => this.props.navigation.navigate('Settings')}> Settings</Text>
			</View>
		);
	}
}

SideMenu.propTypes = {
	navigation: PropTypes.object
};

const styles = new StyleSheet.create ({
	container: {
		height: 55,
		backgroundColor: '#283593',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},

	toucha: {
		alignItems: 'center',
		padding: 10
	}
});