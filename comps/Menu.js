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
  constructor(props) {
    super(props)
    this.state = { 
      showComp: false
     }
  }

  onPress = () => {
    this.setState({
      showComp: !this.state.showComp
    })
  }

 render() {
  // UI
  
	return (
		<View style={styles.menu}>
      <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
        >
    <Image
      style={styles.image}
      source={require('../img/menu.png')}
    /> 
    <Text style={styles.content}>Menu Items</Text>

      </TouchableOpacity>
      <Text>{ this.state.count !== 0 ? this.state.count: null}</Text>
		</View>
	)
}}


