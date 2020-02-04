import React from 'react';
import {Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Index from './Index';
import SignUp from './SignUp';
import Main from '../main/Main';

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: Index,
      navigationOptions: {
        headerShown: false,
      },
    },
    Signup: {
      screen: SignUp,
    },
    Home: {
      screen: Main,
      navigationOptions: {
        headerTitleAlign: 'center',
        headerTitle: 'Home',
        headerLeft: () => false,
      },
    },
  },
  {},
);

export default createAppContainer(AppNavigator);
