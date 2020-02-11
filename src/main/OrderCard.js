import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    width: '95%',
    height: 'auto',
    shadowOpacity: 0.2,
    shadowColor: '#fff',
    shadowOffset: {x: 0, y: 2},
    shadowRadius: 2,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    padding: 2,
    marginTop: '3%',
  },
});

export default Card;
