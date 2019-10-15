
import React from 'react';
import {View} from 'react-native';
import styles from '../styles/MainStyles';
import Story from './Story';
import Footer from './Footer';
import Menu from './Menu';
import Header from './Header';
 
function Main(){
  // UI
  return (
    <View style={styles.main}>
      <Menu />
      <Header />
    <Story />
    <Footer />
    </View>
  )
}
 
export default Main;



