import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, Platform} from 'react-native';
import StackNavigator from './src/entry/Navigator';

export default class App extends Component {
  render() {
    return (
      <View style={styles.pageContainer}>
        <View
          //To set the background color in IOS Status Bar also
          style={{
            backgroundColor: '#50FA7B',
            height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
          }}>
          <StatusBar
            barStyle="light-content"
            // dark-content, light-content and default
            hidden={false}
            //To hide statusBar
            backgroundColor="#00BCD4"
            //Background color of statusBar
            translucent={false}
            //allowing light, but not detailed shapes
            networkActivityIndicatorVisible={true}
          />
        </View>
        <StackNavigator />
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
