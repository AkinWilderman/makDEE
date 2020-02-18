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
            <Text style={{fontSize: 18, flex: 1}}>
              {' '}
              Roasted Meat Burger{' '}
            </Text>
            <Text style={{fontWeight: 'bold'}}> Starting from ₦200 </Text>
            <Text> sold 550, free delivery </Text>
            <Text> with cabbage and spices (optional) </Text>
          </View>
        </View>
      </Card>
      <Card>
        <View style={styles.cardItemView}>
          <Image
            source={require('../media/roasted_chicken.jpeg')}
            style={{height: 'auto', width: 90}}
          />
          <View style={{marginLeft: '5%'}}>
            <Text style={{fontSize: 18, flex: 1}}>
              Roasted Chicken Burger d
            </Text>
            <Text style={{fontWeight: 'bold'}}>Starting from ₦400</Text>
            <Text>sold 500, free delivery</Text>
            <Text>with cabbage and spices (optional)</Text>
          </View>
        </View>
      </Card>
      <Card>
        <View style={styles.cardItemView}>
          <Image
            source={require('../media/roasted_fish.jpeg')}
            style={{height: 'auto', width: 90}}
          />
          <View style={{marginLeft: '5%'}}>
            <Text style={{fontSize: 18, flex: 1}}>Roasted Fish Burger</Text>
            <Text style={{fontWeight: 'bold'}}>Starting from ₦300</Text>
            <Text>sold 360, free delivery</Text>
            <Text>with cabbage and spices (optional)</Text>
          </View>
        </View>
      </Card>
      <Card>
        <View style={styles.cardItemView}>
          <Image
            source={require('../media/fried_fish.jpeg')}
            style={{height: 'auto', width: 90}}
          />
          <View style={{marginLeft: '5%'}}>
            <Text style={{fontSize: 18, flex: 1}}>Fried Fish Burger</Text>
            <Text style={{fontWeight: 'bold'}}>Starting from ₦250</Text>
            <Text>sold 180, free delivery</Text>
            <Text>with cabbage and spices (optional)</Text>
          </View>
        </View>
      </Card>
      <Card>
        <View style={styles.cardItemView}>
          <Image
            source={require('../media/fried_meat.jpeg')}
            style={{height: 'auto', width: 90}}
          />
          <View style={{marginLeft: '5%'}}>
            <Text style={{fontSize: 18, flex: 1}}>Fried Meat Burger</Text>
            <Text style={{fontWeight: 'bold'}}>Starting from ₦200</Text>
            <Text>sold 220, free delivery</Text>
            <Text>with cabbage and spices (optional)</Text>
          </View>
        </View>
      </Card>
      <Card>
        <View style={styles.cardItemView}>
          <Image
            source={require('../media/fried_chicken.jpeg')}
            style={{height: 'auto', width: 90}}
          />
          <View style={{marginLeft: '5%'}}>
            <Text style={{fontSize: 18, flex: 1}}>Fried Chicken Burger</Text>
            <Text style={{fontWeight: 'bold'}}>Starting from ₦400</Text>
            <Text>sold 500, free delivery</Text>
            <Text>with cabbage and spices (optional)</Text>
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
      <Card>
        <View style={styles.cardItemView}>
          <Image
            source={require('../media/suya.jpg')}
            style={{height: 'auto', width: 90}}
          />
          <View style={{marginLeft: '5%'}}>
            <Text> Social center Spot</Text>
            <Text style={{fontSize: 18, flex: 1}}>Roasted Meat Burger</Text>
            <Text style={{fontWeight: 'bold'}}>Starting from ₦150</Text>
            <Text>delivery ₦50</Text>
            <Text>with cabbage and spices (optional)</Text>
          </View>
        </View>
      </Card>
      <Card>
        <View style={styles.cardItemView}>
          <Image
            source={require('../media/suya.jpg')}
            style={{height: 'auto', width: 90}}
          />
          <View style={{marginLeft: '5%'}}>
            <Text> Nineties Spot</Text>
            <Text style={{fontSize: 18, flex: 1}}>Roasted Meat Burger</Text>
            <Text style={{fontWeight: 'bold'}}>Starting from ₦150</Text>
            <Text>delivery ₦50</Text>
            <Text>with cabbage and spices (optional)</Text>
          </View>
        </View>
      </Card>
      <Card>
        <View style={styles.cardItemView}>
          <Image
            source={require('../media/suya.jpg')}
            style={{height: 'auto', width: 90}}
          />
          <View style={{marginLeft: '5%'}}>
            <Text> FSLT Spot</Text>
            <Text style={{fontSize: 18, flex: 1}}>Roasted Meat Burger</Text>
            <Text style={{fontWeight: 'bold'}}>Starting from ₦150</Text>
            <Text>delivery ₦50</Text>
            <Text>with cabbage and spices (optional)</Text>
          </View>
        </View>
      </Card>
      <Card>
        <View style={styles.cardItemView}>
          <Image
            source={require('../media/suya.jpg')}
            style={{height: 'auto', width: 90}}
          />
          <View style={{marginLeft: '5%'}}>
            <Text> ICSA/RAMAT Spot</Text>
            <Text style={{fontSize: 18, flex: 1}}>Roasted Meat Burger</Text>
            <Text style={{fontWeight: 'bold'}}>Starting from ₦150</Text>
            <Text>delivery ₦50</Text>
            <Text>with cabbage and spices (optional)</Text>
          </View>
        </View>
      </Card>
      <Card>
        <View style={styles.cardItemView}>
          <Image
            source={require('../media/suya.jpg')}
            style={{height: 'auto', width: 90}}
          />
          <View style={{marginLeft: '5%'}}>
            <Text> Education Spot</Text>
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
