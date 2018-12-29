
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {RkButton, RkText, RkTextInput, RkSeparator, RkConfig} from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/Ionicons';

 class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
       <View>
              <Image style={styles.logoImg} source={require('../assets/react_logo.png')}/>
              <RkText style={styles.title}><RkText style={styles.extraBold}>React</RkText> Native</RkText>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <View style={styles.widthLimit}>
                 
                </View>
              </View>
        </View>
      </View>
    );
  }
}
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logoImg: {
    alignSelf: 'center',
    width: 80,
    height: 80,
    resizeMode: 'contain'
  },
  widthLimit: {
    flex: 1,
    maxWidth: 275,
    minHeight: 120,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
