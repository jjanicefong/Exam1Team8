import React,{useState} from 'react';
import {
    View,
    TextInput,
    Text,
    Button
} from 'react-native';
import styles from '../styles/HeaderStyles';

function Header() {
    const [text, setText] = useState('The Story of My Life');
    /* constructor() {
        super();
        this.state = { TextInputDisableStatus: true }
    }
//
    onPressButton = () => {
        this.setState({ TextInputDisableStatus: false })
    } */
    //render() { <Text style={styles.headerText}>The Story of My Life</Text>
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>The Story of My Life</Text>
            <TextInput
            placeholder="New Title"
            onChangeText={(text) => setText(text)}
            // mytext={mytext}
            />
            <Button style={{position: 'absolute', top:0, right:0}}
            //onPress={this.onPressButton}
            title="Edit"
            onPress={()=>{
                
            }} /> 
        </View>
    );
}

export default Header;