import React, {Component} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import Card from './OrderCard';

const MakdeeSpot = () => {
  return (
    <View>
      <Text style={{marginTop: 5, marginLeft: 10}}> mAKDEE spot </Text>
      <Card>
        <View
          style={styles.cardItemView}
          onPress={() => this.props.navigation.navigate('OrderPage1')}>
          <Image
            source={require('../media/suya.jpg')}
            style={{height: 'auto', width: 90}}
          />
          <View style={{marginLeft: '5%'}}>
            <Text style={{fontSize: 18, flex: 1}}> Roasted Meat Burger </Text>
            <Text style={{fontWeight: 'bold'}}> Starting from ₦200 </Text>
            <Text> sold 550, free delivery </Text>
            <Text> with cabbage and spices (optional) </Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

const OtherSpots = () => {
  return (
    <View>
      <Text style={{marginTop: 5, marginLeft: 10}}> Other spots</Text>
      <Card>
        <View style={styles.cardItemView}>
          <Image
            source={require('../media/suya.jpg')}
            style={{height: 'auto', width: 90}}
          />
          <View style={{marginLeft: '5%'}}>
            <Text> Suleiman Spot</Text>
            <Text style={{fontSize: 18, flex: 1}}>Roasted Meat Burger</Text>
            <Text style={{fontWeight: 'bold'}}>Starting from ₦150</Text>
            <Text>delivery ₦50</Text>
            <Text>with cabbage and spices (optional)</Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default class Main extends Component {
  state = {
    price: '₦200',
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <MakdeeSpot />
        <OtherSpots />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spotView: {
    alignItems: 'center',
  },
  cardItemView: {
    flexDirection: 'row',
  },
});
