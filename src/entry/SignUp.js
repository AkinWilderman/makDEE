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

export default class SignUp extends Component {
  state = {
    gender: '',
  };
  render() {
    return (
      <View style={styles.container}>
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
            color={'#092E20'}
            title={'Continue'}
            height={30}
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </Card>
        <View style={{marginTop: '20%'}}>
          <Text style={{margin: '5%', color: '#fff'}}>
            Any information entered here is bound by our terms and conditions to
            the ends of the world.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#092E20',
    justifyContent: 'center',
  },
  textfield: {
    width: '20%',
  },
  makd_text: {
    marginStart: '40%',
  },
});
