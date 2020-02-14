import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Settings from './submain/Settings';
import Messages from './submain/Messages';
import Help from './submain/Help';
import PaymentMethod from './submain/PaymentMethod';
import DeliveryAddress from './submain/DeliveryAddress';
import Orderpage from './submain/OrderPage';
import Profile from './Profile';

const ProfileStackNavigator = createStackNavigator({
  ProfileMain: {
    screen: Profile,
    navigationOptions: {
      headerShown: false,
      headerLeft: () => false,
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      headerShown: false,
      headerLeft: () => false,
    },
  },
  DeliveryAddress: {
    screen: DeliveryAddress,
    navigationOptions: {
      headerShown: false,
      headerLeft: () => false,
    },
  },
  Messages: {
    screen: Messages,
    navigationOptions: {
      headerShown: false,
      headerLeft: () => false,
    },
  },
  RecentOrders: {
    screen: Orderpage,
    navigationOptions: {
      headerShown: false,
      headerLeft: () => false,
    },
  },
  PaymentMethod: {
    screen: PaymentMethod,
    navigationOptions: {
      headerShown: false,
      headerLeft: () => false,
    },
  },
  Help: {
    screen: Help,
    navigationOptions: {
      headerShown: false,
      headerLeft: () => false,
    },
  },
});

export default ProfileStackNavigator;
