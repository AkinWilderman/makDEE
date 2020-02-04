import React, {Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Main screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
