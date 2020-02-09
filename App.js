import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import StackNavigator from './src/entry/Navigator';
import Profile from './src/main/Profile';

export default class App extends Component {
  render() {
    return (
      <View style={styles.pageContainer}>
        {/*<StackNavigator />*/}
        <Profile />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  formContainer: {
    paddingTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
