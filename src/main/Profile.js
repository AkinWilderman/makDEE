import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Platform,
  Image,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

function Separator() {
  return <View style={styles.separator} />;
}

export default class Profile extends Component {
  state = {
    balance: '₦70,000.00',
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View>
            <Text style={{color: '#fff', alignSelf: 'flex-end'}}>
              Balance: {this.state.balance}
            </Text>
          </View>
          <View>
            <Image
              source={require('../media/profile_picture.jpg')}
              style={{
                width: 100,
                height: 100,
                borderRadius: 100,
                borderWidth: 4,
                borderColor: '#fff',
                backgroundColor: '#eee',
                marginLeft: '2%',
              }}
            />
          </View>
          <View style={{flex: 1, marginLeft: '3%'}}>
            <Text style={{fontSize: 20, color: '#fff'}}>Akin Wilderman</Text>
            <Text style={{color: '#fff'}}>+2348069271881</Text>
          </View>
        </View>
        <View style={styles.below}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Settings')}>
            <View style={styles.belowItems}>
              <Ionicons
                name={Platform.select({
                  ios: 'ios-settings',
                  android: 'md-settings',
                })}
                size={20}
                color={'red'}
              />
              <Text style={{marginLeft: 30, fontSize: 16, flex: 1}}>
                Settings
              </Text>
              <Ionicons
                style={{marginLeft: 'auto'}}
                name={Platform.select({
                  ios: 'ios-arrow-forward',
                  android: 'md-arrow-dropright',
                })}
                size={30}
                color={'grey'}
              />
            </View>
          </TouchableOpacity>
          <Separator />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('DeliveryAddress')}>
            <View style={styles.belowItems}>
              <Ionicons
                name={Platform.select({
                  ios: 'ios-pin',
                  android: 'md-pin',
                })}
                size={20}
                color={'red'}
              />
              <Text style={{marginLeft: 30, fontSize: 16}}>
                Delivery Address
              </Text>
              <Ionicons
                style={{marginLeft: 'auto'}}
                name={Platform.select({
                  ios: 'ios-arrow-forward',
                  android: 'md-arrow-dropright',
                })}
                size={30}
                color={'grey'}
              />
            </View>
          </TouchableOpacity>
          <Separator />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Messages')}>
            <View style={styles.belowItems}>
              <Ionicons
                name={Platform.select({
                  ios: 'ios-mail',
                  android: 'md-mail',
                })}
                size={20}
                color={'red'}
              />
              <Text style={{marginLeft: 30, fontSize: 16, flex: 1}}>
                Messages
              </Text>
              <Ionicons
                style={{marginLeft: 'auto'}}
                name={Platform.select({
                  ios: 'ios-arrow-forward',
                  android: 'md-arrow-dropright',
                })}
                size={30}
                color={'grey'}
              />
            </View>
          </TouchableOpacity>
          <Separator />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('RecentOrders')}>
            <View style={styles.belowItems}>
              <Ionicons
                name={Platform.select({
                  ios: 'ios-cart',
                  android: 'md-cart',
                })}
                size={20}
                color={'red'}
              />
              <Text style={{marginLeft: 30, fontSize: 16, flex: 1}}>
                Recent Orders
              </Text>
              <Ionicons
                style={{marginLeft: 'auto'}}
                name={Platform.select({
                  ios: 'ios-arrow-forward',
                  android: 'md-arrow-dropright',
                })}
                size={30}
                color={'grey'}
              />
            </View>
          </TouchableOpacity>
          <Separator />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('PaymentMethod')}>
            <View style={styles.belowItems}>
              <Ionicons
                name={Platform.select({
                  ios: 'ios-card',
                  android: 'md-card',
                })}
                size={20}
                color={'red'}
              />
              <Text style={{marginLeft: 30, fontSize: 16, flex: 1}}>
                Payment Method
              </Text>
              <Ionicons
                style={{marginLeft: 'auto'}}
                name={Platform.select({
                  ios: 'ios-arrow-forward',
                  android: 'md-arrow-dropright',
                })}
                size={30}
                color={'grey'}
              />
            </View>
            <Separator />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Help')}>
            <View style={styles.belowItems}>
              <Ionicons
                name={Platform.select({
                  ios: 'ios-help-circle',
                  android: 'md-help-circle',
                })}
                size={20}
                color={'red'}
              />
              <Text style={{marginLeft: 30, fontSize: 16, flex: 1}}>Help</Text>
              <Ionicons
                style={{marginLeft: 'auto'}}
                name={Platform.select({
                  ios: 'ios-arrow-forward',
                  android: 'md-arrow-dropright',
                })}
                size={30}
                color={'grey'}
              />
            </View>
            <Separator />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 3,
    width: 'auto',
    backgroundColor: '#092E20',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#fff',
    backgroundColor: '#eee',
    marginLeft: '2%',
  },
  buttonStyle: {
    alignSelf: 'stretch',
  },
  below: {
    backgroundColor: '#fff',
    width: 'auto',
    flex: 7,
  },
  belowItems: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '2%',
    padding: '2%',
  },
  separator: {
    marginVertical: 1,
    borderBottomColor: '#D6D8DC',
    borderBottomWidth: 0.5,
  },
});
