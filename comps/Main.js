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
import THead from './Trial-Header';
import TBody from './Trial-Body';
import TFoot from './Trial-Footer';
import Menu from './Menu'

// Import comps below

function Main(){
	// UI
	return (
		<View style={styles.app}>

      {/* PLEASE DELETE TRIAL COMPS AFTER */}
      <Menu />
      <THead />
      <TBody />
      <TFoot />

		</View>
	)
}

export default Main;
