import React, {Component} from 'react';
import {View, Picker} from 'react-native';

class PickerForm extends Component {
  state = {user: ''};
  updateState = user => {
    this.setState({user: user});
  };

  render() {
    return (
      <View>
        <Picker
          selectedValue={this.state.user}
          onValueChange={this.updateState()}>
          <Picker.Item value={'Female'} label={'female'} />
          <Picker.Item label={'male'} value={'Male'} />
        </Picker>
      </View>
    );
  }
}

export default PickerForm;
