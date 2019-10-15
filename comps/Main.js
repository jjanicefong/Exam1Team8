
import React from 'react';
import {View,Text} from 'react-native'
import styles from '../styles/MainStyles';
import Footer from '../comps/Footer';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// Import comps below


function Main(){
	// UI
	return (

		<View style={styles.main}>
         <Footer />
		</View>
	)
}


export default Main;


