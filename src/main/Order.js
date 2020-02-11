import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Card from './OrderCard';

export default class Order extends Component {
  render() {
    return (
      <View>
        <Text style={{marginLeft: 10}}>Recent Orders</Text>
        <Card>
          <View style={styles.orderImage} />
          <Text>dkjvkfjdkgkjdg</Text>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  orderImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#fff',
    backgroundColor: '#eee',
    marginLeft: '2%',
  },
});
