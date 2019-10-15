import React, {useState} from 'react';
import {View,Text, Picker} from 'react-native';
import styles from '../styles/FooterStyles';

function Footer(){
    const [newText, setNewText] = useState("author full name");

	// UI
	return (
        <View style={[styles.footer,{newText}]}>
            <Text style={[styles.text1,{newText}]}>
               by
            </Text>
            <Text style={[styles.text2,{newText}]}>
               author full name
            </Text>
            
            <Picker
                selectedValue = {newText}
                style = {styles.picker}
                onValueChange = {(itemValue)=>{
                    setNewText(itemValue)
                }}>
                <Picker.Item label="Pick Any Story" value={newText}/>
                <Picker.Item label="Story 1" value="Sam Marles"/>
                <Picker.Item label="Story 2" value="Jesse Jen"/>
                <Picker.Item label="Story 3" value="Chaze Style"/>
            </Picker>
        </View>
	)
}

export default Footer;