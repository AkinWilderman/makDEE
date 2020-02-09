import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Order extends Component {
  render() {
    return (
      <View>
        <Text>What's up order</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
