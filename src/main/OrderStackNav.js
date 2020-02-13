import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Order from './Order';
import Orderpage from './submain/OrderPage';

const OrderStackNavigator = createStackNavigator({
  Order: {
    screen: Order,
    navigationOptions: {
      headerShown: false,
      headerLeft: () => false,
    },
  },
  OrderPage: {
    screen: Orderpage,
    navigationOptions: {
      headerShown: false,
      headerLeft: () => false,
    },
  },
});

export default OrderStackNavigator;
