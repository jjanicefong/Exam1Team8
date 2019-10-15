import React from 'react';
import {View,Text} from 'react-native'
import styles from '../styles/MainStyles';
import Footer from '../comps/Footer';

function Main(){
	// UI
	return (
		<View style={styles.main}>
         <Footer />
		</View>
	)
}

export default Main;