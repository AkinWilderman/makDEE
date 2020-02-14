import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Main from './Main';
import ProductPage from './submain/ProductPage';

const MainStackNavigator = createStackNavigator({
  ProductList: {
    screen: Main,
    navigationOptions: {
      headerShown: false,
      headerLeft: () => false,
    },
  },
  OrderPage: {
    screen: ProductPage,
    navigationOptions: {
      headerShown: false,
      headerLeft: () => false,
    },
  },
});

export default MainStackNavigator;
