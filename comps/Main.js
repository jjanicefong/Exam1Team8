
import React from 'react';
import {View} from 'react-native';
import styles from '../styles/Mainstyles';
import Story from './Story';
 
function Main(){
  // UI
  return (
    <View style={styles.main}>
    <Story />
    </View>
  )
}
 
export default Main;



