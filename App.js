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
import styles from './styles/AppStyles';
import Header from './comps/Header';

// Import comps below
// import Main from './comps/Main';

function App(){
	// UI
	return (
		<View style={styles.app}>
			<Header />
		</View>
	)
}

export default App;
