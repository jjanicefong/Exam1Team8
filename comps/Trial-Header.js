/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from '../styles/MainStyles';

// Import comps below

function THead(){
	// UI
	return (
		<View style={styles.head}>
      <Text> THE STORY OF MY LIFE </Text>
		</View>
	)
}

export default THead;
