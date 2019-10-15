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
  TouchableHighlight
} from 'react-native';

import styles from '../styles/MenuStyles';


export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  }

 render() {
  // UI
  
	return (
		<View style={styles.menu}>
      <TouchableHighlight
         style={styles.button}
         onPress={this.onPress}
        >
    <Image
      style={styles.image}
      source={require('../img/menu.png')}
    /> 

      </TouchableHighlight>
      <Text>{ this.state.count !== 0 ? this.state.count: null}</Text>
		</View>
	)
}}


