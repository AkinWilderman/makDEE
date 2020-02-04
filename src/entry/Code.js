import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextField} from 'react-native-material-textfield';

export default class Code extends Component {
  state = {
    code: '',
  };
  render() {
    let {code} = this.state;
    return (
      <View>
        <TextField
          label="please enter a 6 digit security code"
          keyboardType="numeric"
          value={code}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
