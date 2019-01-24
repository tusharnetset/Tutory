
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Image,
    Alert
  } from 'react-native';
  import { Button, SocialIcon } from 'react-native-elements';
  import Icon from 'react-native-vector-icons/FontAwesome';


 class Login extends Component {

    constructor(props) {
        super(props);
        state = {
          fullName: '',
          email   : '',
          password: '',
        }
      }
      onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed "+viewId);
      }
      onClickSignUp = ()=>{
          Alert.alert("go to signup");
      }
    

  render() {
    return (
        <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/react_logo.png')}/>
            <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
            <TextInput style={styles.inputs}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({email})}/>
            </View>
            
            <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
            <TextInput style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                onChangeText={(password) => this.setState({password})}/>
            </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.signUpText}>Login</Text>
        </TouchableHighlight>
        
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Signup')}>
        <Text  style={styles.signUpText}>You don't have any account please? Sign Up</Text>
        </TouchableHighlight>
        <View style={styles.socialIcon}>
            <SocialIcon
                type='gitlab'
            />
            <SocialIcon
                type='facebook'
            />  
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
        backgroundColor: '#00b5ec',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
    },
    signupButton: {
        backgroundColor: "#FF4DFF",
    },
    signUpText: {
        color: 'white',
    },
    logo:{
        height:75,
        width:84,
        marginBottom:10
    },
    socialIcon:{
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        marginTop:30,
        width:250,
        borderRadius:30,
    }
  });