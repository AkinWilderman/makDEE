import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View>
            <Text style={{fontSize: 20, color: '#fff'}}>
              Akin Wilderman hddvhv
            </Text>
          </View>
          <View style={styles.profileImage} />
        </View>
        <View>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text> Profile </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '8.9%',
  },
  top: {
    height: '30%',
    width: 'auto',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#092E20',
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#fff',
    backgroundColor: '#eee',
  },
  buttonStyle: {
    alignSelf: 'stretch',
  },
});
