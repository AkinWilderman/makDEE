import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import Card from './OrderCard';

export default class Order extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text> Recent Orders </Text>
        <Card>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../media/roasted_chicken.jpeg')}
              style={{
                width: 50,
                height: 50,
                borderRadius: 100,
                borderWidth: 4,
                borderColor: '#fff',
                backgroundColor: '#eee',
                marginLeft: '2%',
              }}
            />
            <Text style={{marginLeft: 20, flex: 1}}>
              [Nineties] mAKDEE Spot
            </Text>
            <Text>29 - 01 - 2020</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={{flex: 1}}>Bread & roasted Chicken </Text>
              <Text>₦400</Text>
            </View>
            <View>
              <Text style={{marginLeft: 5}}>status: </Text>
              <Text style={{color: '#73624C'}}> Not Delivered</Text>
            </View>
            <TouchableOpacity style={{marginLeft: 'auto'}}>
              <Button
                title="Order again"
                color="#092E20"
                onPress={() => this.props.navigation.navigate('OrderPage')}
              />
            </TouchableOpacity>
          </View>
        </Card>
        <Card>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../media/suya.jpg')}
              style={{
                width: 50,
                height: 50,
                borderRadius: 100,
                borderWidth: 4,
                borderColor: '#fff',
                backgroundColor: '#eee',
                marginLeft: '2%',
              }}
            />
            <Text style={{marginLeft: 20, flex: 1}}>Suleiman Spot</Text>
            <Text>29 - 01 - 2020</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text>Bread & roasted Meat </Text>
              <Text>₦200</Text>
            </View>
            <View>
              <Text style={{marginLeft: 5}}>status: </Text>
              <Text style={{color: '#73624C'}}> Not Delivered</Text>
            </View>
            <TouchableOpacity style={{marginLeft: 'auto'}}>
              <Button
                title="Order again"
                color="#092E20"
                onPress={() => this.props.navigation.navigate('')}
              />
            </TouchableOpacity>
          </View>
        </Card>
        <Card>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../media/fried_chicken.jpeg')}
              style={{
                width: 50,
                height: 50,
                borderRadius: 100,
                borderWidth: 4,
                borderColor: '#fff',
                backgroundColor: '#eee',
                marginLeft: '2%',
              }}
            />
            <Text style={{marginLeft: 20, flex: 1}}>
              [ICSA/RAMAT] mAKDEE Spot
            </Text>
            <Text>28 - 01 - 2020</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text> Bread & fried Chicken </Text>
              <Text>₦400</Text>
            </View>
            <View>
              <Text style={{marginLeft: 5}}>status: </Text>
              <Text style={{color: 'red'}}> Canceled </Text>
            </View>
            <TouchableOpacity style={{marginLeft: 'auto'}}>
              <Button
                title="Order again"
                color="#092E20"
                onPress={() => this.props.navigation.navigate('')}
              />
            </TouchableOpacity>
          </View>
        </Card>
        <Card>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../media/roasted_fish.jpeg')}
              style={{
                width: 50,
                height: 50,
                borderRadius: 100,
                borderWidth: 4,
                borderColor: '#fff',
                backgroundColor: '#eee',
                marginLeft: '2%',
              }}
            />
            <Text style={{marginLeft: 20, flex: 1}}>
              [Nineties] mAKDEE Spot
            </Text>
            <Text>29 - 01 - 2020</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text> Bread & roasted fish </Text>
              <Text>₦400</Text>
            </View>
            <View>
              <Text style={{marginLeft: 5}}>status: </Text>
              <Text style={{color: 'green'}}> Delivered</Text>
            </View>
            <TouchableOpacity style={{marginLeft: 'auto'}}>
              <Button
                title="Order again"
                color="#092E20"
                onPress={() => this.props.navigation.navigate('')}
              />
            </TouchableOpacity>
          </View>
        </Card>
        <Card>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../media/suya.jpg')}
              style={{
                width: 50,
                height: 50,
                borderRadius: 100,
                borderWidth: 4,
                borderColor: '#fff',
                backgroundColor: '#eee',
                marginLeft: '2%',
              }}
            />
            <Text style={{marginLeft: 20, flex: 1}}>
              [Nineties] mAKDEE Spot
            </Text>
            <Text>29 - 01 - 2020</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text>Bread & roasted Chicken</Text>
              <Text>₦400</Text>
            </View>
            <View>
              <Text style={{marginLeft: 5}}>status: </Text>
              <Text style={{color: 'green'}}> Delivered</Text>
            </View>
            <TouchableOpacity style={{marginLeft: 'auto'}}>
              <Button
                title="Order again"
                color="#092E20"
                onPress={() => this.props.navigation.navigate('')}
              />
            </TouchableOpacity>
          </View>
        </Card>
        <Card>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../media/suya.jpg')}
              style={{
                width: 50,
                height: 50,
                borderRadius: 100,
                borderWidth: 4,
                borderColor: '#fff',
                backgroundColor: '#eee',
                marginLeft: '2%',
              }}
            />
            <Text style={{marginLeft: 20, flex: 1}}>FSLT Spot</Text>
            <Text>29 - 01 - 2020</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text>Bread & roasted Chicken</Text>
              <Text>₦400</Text>
            </View>
            <View>
              <Text style={{marginLeft: 5}}>status: </Text>
              <Text style={{color: 'green'}}> Delivered</Text>
            </View>
            <TouchableOpacity style={{marginLeft: 'auto'}}>
              <Button
                title="Order again"
                color="#092E20"
                onPress={() => this.props.navigation.navigate('')}
              />
            </TouchableOpacity>
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
