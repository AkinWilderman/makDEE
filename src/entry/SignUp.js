import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  TextInput,
  StyleSheet,
  Text,
  Button,
  Picker,
  ScrollView,
} from 'react-native';
import {TextField} from 'react-native-material-textfield';
import Card from './Card';
import PickerForm from './Picker';
import {
  heightPercentageroDP as hd,
  widthPercentageToDP as wd,
} from 'react-native-responsive-screen';

export default class SignUp extends Component {
  state = {
    gender: '',
  };
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
        }}>
        <Card style={{marginTop: '10%'}}>
          <Text style={styles.makd_text}>MAKDEE</Text>
          <TextField
            style={styles.textfield}
            placeholder="First Name"
            placeholderTextColor="black"
            textColor="#000000"
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextField
            style={styles.textfield}
            placeholder="Last Name"
            placeholderTextColor="black"
            textColor="#000000"
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextField
            style={styles.textfield}
            placeholder="Password"
            placeholderTextColor="black"
            baseColor="rgba(0,0,0,1)"
            textColor="#000000"
            returnKeyType="go"
            secureTextEntry
          />
          <TextField
            style={styles.textfield}
            placeholder="Confirm Password"
            placeholderTextColor="black"
            baseColor="rgba(0,0,0,1)"
            textColor="#000000"
            returnKeyType="go"
            secureTextEntry
          />
          <Picker
            selectedValue={this.state.gender}
            style={{height: 50, width: 200}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({gender: itemValue})
            }>
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Male" value="male" />
          </Picker>
          <Button
            color={'#202340'}
            title={'Continue'}
            height={30}
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </Card>
        <View style={{marginTop: '20%'}}>
          <Text style={{margin: '5%'}}>
            Any information entered here is bound by our terms and conditions to
            the ends of the world
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textfield: {
    width: '20%',
  },
  makd_text: {
    marginStart: '40%',
  },
});
