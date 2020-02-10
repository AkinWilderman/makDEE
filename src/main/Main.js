import React, {Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import Card from './OrderCard';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <View style={styles.cardItemView}>
            <View>
              <Text>Hello card</Text>
            </View>
            <View>
              <Text>Hello card hdhhbkjbdkjvkjdbvkjsdbkjbvsb</Text>
              <Text>Hello carddbkjbkjdbkjbdkjbkjdbksb</Text>
            </View>
          </View>
        </Card>
      </View>
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
