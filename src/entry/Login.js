import React, {Component} from 'react';
import {View, ImageBackground, Text, StyleSheet} from 'react-native';
import {TextField} from 'react-native-material-textfield';

export default class Login extends Component {
  render() {
    return (
      <View>
        <ImageBackground
          style={{width: '100%', height: '100%'}}
          source={require('../media/bread.jpg')}>
          <View style={styles.card}>
            <TextField
              placeholder="Email / Phone number"
              placeholderTextColor="white"
              label="Email/Phone"
              baseColor="rgba(0,0,0,0.5)"
              textColor="#FFFFFF"
              returnKeyType="next"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />a
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: 300,
    height: 500,
    marginStart: 30,
    marginEnd: 35,
    marginTop: 60,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {x: 0, y: 0},
    shadowRadius: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#FFF',
  },
});
