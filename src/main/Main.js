import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Text, Button, Image} from 'react-native';
import Card from './OrderCard';

export default class Main extends Component {
  state = {
    price: '₦200',
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <Card>
          <View style={styles.cardItemView}>
            <Image
              source={require('../media/suya.jpg')}
              style={{height: 'auto', width: 70}}
            />
            <View style={{marginLeft: '5%'}}>
              <Text style={{fontSize: 18, flex: 1}}>
                Bread and roasted meat
              </Text>
              <Text style={{fontWeight: 'bold'}}>
                Starting from {this.state.price}
              </Text>
              <Text>Hello carddbkjbkjdbkjbdkjbkjdbksb</Text>
              <Text>Hello carddbkjbkjdbkjbdkjbkjdbksb</Text>
            </View>
          </View>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardItemView: {
    flexDirection: 'row',
  },
});
