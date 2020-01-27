import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => {
  return <View style={styles.card}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  card: {
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    width: 300,
    height: 500,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {x: 0, y: 2},
    shadowRadius: 2,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
    padding: 20,
  },
});

export default Card;
