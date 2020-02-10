// import modules
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Animated,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';
import {TextField} from 'react-native-material-textfield';

// create component
class Index extends Component {
  // states used inside the component
  state = {
    phone: '',
    fieldAnimation: new Animated.Value(0),
    topAnimation: new Animated.Value(0),
  };
  // create animation
  startAnimation = () => {
    Animated.timing(this.state.fieldAnimation, {
      toValue: -500,
      duration: 1500,
    }).start();

    Animated.timing(this.state.topAnimation, {
      toValue: 800,
      duration: 2000,
    }).start();
  };
  // component render method
  render() {
    let {phone} = this.state;
    const fieldAnimatedStyle = {
      transform: [
        {
          translateY: this.state.fieldAnimation,
        },
      ],
    };

    const topAnimatedStyle = {
      transform: [
        {
          translateY: this.state.topAnimation,
        },
      ],
    };
    return (
      <View>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.mainView, topAnimatedStyle]}>
            <Image
              source={require('../media/bread.jpg')}
              style={{height: '10%', width: '15%'}}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.subView, fieldAnimatedStyle]}>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 21}}>Best place to taste mAKDEE</Text>
            </View>
            <View style={{width: '80%', marginLeft: '5%'}}>
              <TextField
                value={phone}
                style={styles.textfield}
                placeholder="80xxxxxxxx"
                placeholderTextColor="black"
                textColor="#000000"
                returnKeyType="next"
                keyboardType="numeric"
                autoCorrect={false}
                prefix={'+234'}
                onFocus={this.startAnimation}
              />
            </View>
            <View style={{alignItems: 'flex-end', marginEnd: '5%'}}>
              <Button
                title="Continue"
                color="#092E20"
                onPress={() => this.props.navigation.navigate('Signup')}
              />
            </View>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

// styles for the views
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    height: '75%',
    backgroundColor: '#092E20',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subView: {
    height: '25%',
  },
  textfield: {
    width: '20%',
  },
});

export default Index;
