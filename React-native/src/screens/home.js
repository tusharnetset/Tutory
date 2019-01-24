
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
  import { Button, Header, ListItem } from 'react-native-elements';
  import Icon from 'react-native-vector-icons/FontAwesome';


 class Home extends Component {

    
    onClickListener = (viewId) => {
      Alert.alert("Alert", "Button pressed "+viewId);
    }
    onClickSignUp = ()=>{
      Alert.alert("go to signup");
    }
    

  render() {
    return (
        <View>
          <Header style={styles.header}
            placement="left"
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Home', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
          <View style={styles.container}>
          <View
            onResponderMove={this.setPosition}
            onResponderRelease={this.resetPosition}
            onStartShouldSetResponder={this._onStartShouldSetResponder}
            onMoveShouldSetResponder={this._onMoveShouldSetResponder}
            style={[styles.card, this.getCardStyle()]}>

            <Image source={{uri: 'http://i.imgur.com/91AR0Lo.jpg'}} style={styles.cardImage} />
            <View style={styles.cardTextContainer}>
              <Text style={styles.textLeft}>Rabbit, 10</Text>
              <Text style={styles.textRight}>1 Connection</Text>
            </View>
          </View>
          <View style={styles.dragText}>
            <Text>{this.state.lastDragDirectio}</Text>
          </View>
      </View>
      </View>
    );
  }
}
export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00b5ec',
    },
    
  });