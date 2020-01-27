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
  render() {
    return (
      <View>
        <Card>
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
            placeholder="08xxxxxxx"
            placeholderTextColor="black"
            textColor="#000000"
            returnKeyType="next"
            keyboardType="numeric"
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
          {/*<Picker
            selectedValue={this.state.language}
            style={{height: 50, width: 100}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({language: itemValue})
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>*/}

          <Button
            style={styles.button}
            color={'#6dbd63'}
            title={'Next'}
            height={30}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    width: 300,
    height: 500,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {x: 0, y: 0},
    shadowRadius: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fff',
    padding: 20,
  },
  button: {
    height: '10%',
    width: '10%',
  },
  textfield: {
    width: '20%',
  },
  makd_text: {
    marginStart: '40%',
  },
});
