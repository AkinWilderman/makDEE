import React from 'react';
import {Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Index from './Index';
import SignUp from './SignUp';
import Main from '../main/Main';
import Profile from '../main/Profile';
import Order from '../main/Order';
import OrderStackNavigator from '../main/OrderStackNav';
import MainStackNavigator from '../main/MainStackNav';
import ProfileStackNavigator from '../main/ProfileStackNav';

// bottom tab navigator
const BottomNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: MainStackNavigator,
      navigationOptions: {
        title: 'mAKDEE',
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Ionicons
            name={Platform.select({ios: 'ios-home', android: 'md-home'})}
            size={24}
            color={tintColor}
          />
        ),
      },
    },
    Order: {
      screen: OrderStackNavigator,
      navigationOptions: {
        title: 'mAKDEE',
        tabBarLabel: 'Orders',
        tabBarIcon: ({tintColor}) => (
          <Ionicons
            name={Platform.select({ios: 'ios-menu', android: 'md-menu'})}
            size={24}
            color={tintColor}
          />
        ),
      },
    },
    Profile: {
      screen: ProfileStackNavigator,
      navigationOptions: {
        headerShown: false,
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (
          <Ionicons
            name={Platform.select({ios: 'ios-person', android: 'md-person'})}
            size={24}
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    navigationOptions: ({navigation}) => {
      const {routeName} = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
      };
    },
    shifting: true,
    backBehavior: 'none',
    initialRouteName: 'Home',
    activeColor: 'black',
    inactiveColor: 'black',
    barStyle: {backgroundColor: 'white', padding: '1%'},
  },
);

// App navigator
const AppNavigator = createStackNavigator(
  {
    Index: {
      screen: Index,
      navigationOptions: {
        headerShown: false,
      },
    },
    Signup: {
      screen: SignUp,
    },
    Main: {
      screen: BottomNavigator,
      navigationOptions: {
        headerTitleAlign: 'center',
        headerTitle: 'mAKDEE',
        headerLeft: () => false,
      },
    },
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
