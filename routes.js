
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from './Home';
import Profile from './Profile';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import AboutUs from './AboutUs';



const DrawerIcon = (props) => {
  return (
    <TouchableOpacity 
      style={{ padding: 20 }}
      onPress={() => {props.navigation.toggleDrawer()}}>
      <Ionicons
        name="md-menu"
        size={28}
        color="black"
        
        
      />
    </TouchableOpacity>
  );
};
        


const stack1 = createStackNavigator({

  First:{
    screen: Home,
    label: 'Home',
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: <DrawerIcon navigation={navigation}/>,
    }),
    
  },

  Screen1: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen1',
      
    }),
  },

  Screen2: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen2',
      
      }),
    },
  });

  const stack2 = createStackNavigator({
    Second:{
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        title: 'Profile',
        headerLeft: <DrawerIcon navigation={navigation} />,
      }),

    }


  });


const stack3 = createStackNavigator({
  Second:{
    screen: AboutUs,
    navigationOptions: ({ navigation }) => ({
      title: 'About Us',
      headerLeft: <DrawerIcon navigation={navigation} />,
    }),

  }


});

export {stack1, stack2, stack3};

const drawernav = createDrawerNavigator({
  first: {
    path:'/',
    screen: stack1,
    navigationOptions: ({navigation}) =>( {
        title: 'Home',
        // headerLeft: <HeaderComponent {...this.props}/>
        
        drawerLabel: "Home",
        drawerIcon: ({tintColor}) => (
          <Ionicons name="ios-home" color={tintColor} size={24} />
          ),

      }),
        

    },

  second: {
    path:'./Profile',
    screen: stack2,
    navigationOptions: ({navigation}) =>( {
        title: 'Home',
        // headerLeft: <HeaderComponent {...this.props}/>
        
        drawerLabel: "Profile",
        drawerIcon: ({tintColor}) => (
          <Ionicons name="md-person" color={tintColor} size={24} />
          ),

      }),
  },

  // third: {
  //   path:'./Profile',
  //   screen: stack2,
  //   navigationOptions: ({navigation}) =>( {
  //       title: 'My Dairy',
  //       // headerLeft: <HeaderComponent {...this.props}/>
        
  //       drawerLabel: "My Dairy",
  //       drawerIcon: ({tintColor}) => (
  //         <Ionicons name="ios-information-circle" color={tintColor} size={24} />
  //         ),

  //     }),
  // },

  fourth: {
    path:'./AboutUs',
    screen: stack3,
    navigationOptions: ({navigation}) =>( {
        title: 'About Us',
        // headerLeft: <HeaderComponent {...this.props}/>
        
        drawerLabel: "About Us",
        drawerIcon: ({tintColor}) => (
          <Ionicons name="ios-information-circle" color={tintColor} size={24} />
          ),

      }),
  },

    
  }, {
    
    drawerWidth: Dimensions.get('window').width - 120,  
   
});

export default drawernav;
  





