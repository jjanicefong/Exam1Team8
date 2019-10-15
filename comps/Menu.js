/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import styles from '../styles/MenuStyles';


export default class Menu extends Component {
  state={
    opacity: 0
  }

 onPress = () => {
    this.setState({
      opacity: 1 //Anything u want
    });
  }



 render() {
  // UI



  
	return (
    
		<View style={{ opacity: this.state.opacity._value, position: 'absolute', zIndex: 100}}>
  
      
      <TouchableOpacity
         onPress={this.onPress}
        >
    <Image
      style={styles.image}
      source={require('../img/menu.png')}
    /> 
    <Text style={[styles.content, {opacity: this.state.opacity}]}>Menu Items</Text>

      </TouchableOpacity>
		</View>
	)
}}


