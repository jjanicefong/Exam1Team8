import React, {useState} from 'react';
import 
{View,
StyleSheet,
Switch,
Text,
ScrollView} from 'react-native'
import styles from '../styles/Storystyles';
export default function Story(){

    // NIGHT MODE BUTTON START
const [nightMode, setNightMode] = useState(false);

    var statemsg = null;
    var bgcolor = null;
    if (nightMode === false) {
        statemsg = (
            <ScrollView>
            <Text>
                Minions ipsum la bodaaa hana dul sae daa belloo! Daa poulet tikka masala tatata bala tu bappleees. Gelatooo hana dul sae jiji pepete para tú butt gelatooo potatoooo me want bananaaa! Po kass underweaaar wiiiii chasy para tú hahaha bananaaaa pepete wiiiii. Aaaaaah baboiii po kass poopayee tatata bala tu underweaaar jeje pepete ti aamoo! Bee do bee do bee do ti aamoo! Hahaha belloo! Underweaaar tatata bala tu ti aamoo! Daa chasy poulet tikka masala.
                Minions ipsum la bodaaa hana dul sae daa belloo! Daa poulet tikka masala tatata bala tu bappleees. Gelatooo hana dul sae jiji pepete para tú butt gelatooo potatoooo me want bananaaa! Po kass underweaaar wiiiii chasy para tú hahaha bananaaaa pepete wiiiii. Aaaaaah baboiii po kass poopayee tatata bala tu underweaaar jeje pepete ti aamoo! Bee do bee do bee do ti aamoo! Hahaha belloo! Underweaaar tatata bala tu ti aamoo! Daa chasy poulet tikka masala.
                Minions ipsum la bodaaa hana dul sae daa belloo! Daa poulet tikka masala tatata bala tu bappleees. Gelatooo hana dul sae jiji pepete para tú butt gelatooo potatoooo me want bananaaa! Po kass underweaaar wiiiii chasy para tú hahaha bananaaaa pepete wiiiii. Aaaaaah baboiii po kass poopayee tatata bala tu underweaaar jeje pepete ti aamoo! Bee do bee do bee do ti aamoo! Hahaha belloo! Underweaaar tatata bala tu ti aamoo! Daa chasy poulet tikka masala.
                Minions ipsum la bodaaa hana dul sae daa belloo! Daa poulet tikka masala tatata bala tu bappleees. Gelatooo hana dul sae jiji pepete para tú butt gelatooo potatoooo me want bananaaa! Po kass underweaaar wiiiii chasy para tú hahaha bananaaaa pepete wiiiii. Aaaaaah baboiii po kass poopayee tatata bala tu underweaaar jeje pepete ti aamoo! Bee do bee do bee do ti aamoo! Hahaha belloo! Underweaaar tatata bala tu ti aamoo! Daa chasy poulet tikka masala.
            </Text>
            </ScrollView>
        )
            bgcolor = styles.app
    }
        else {
            statemsg = (
                <ScrollView>
                <Text style={{color:'white'}}>
                    Minions ipsum la bodaaa hana dul sae daa belloo! Daa poulet tikka masala tatata bala tu bappleees. Gelatooo hana dul sae jiji pepete para tú butt gelatooo potatoooo me want bananaaa! Po kass underweaaar wiiiii chasy para tú hahaha bananaaaa pepete wiiiii. Aaaaaah baboiii po kass poopayee tatata bala tu underweaaar jeje pepete ti aamoo! Bee do bee do bee do ti aamoo! Hahaha belloo! Underweaaar tatata bala tu ti aamoo! Daa chasy poulet tikka masala.
                    Minions ipsum la bodaaa hana dul sae daa belloo! Daa poulet tikka masala tatata bala tu bappleees. Gelatooo hana dul sae jiji pepete para tú butt gelatooo potatoooo me want bananaaa! Po kass underweaaar wiiiii chasy para tú hahaha bananaaaa pepete wiiiii. Aaaaaah baboiii po kass poopayee tatata bala tu underweaaar jeje pepete ti aamoo! Bee do bee do bee do ti aamoo! Hahaha belloo! Underweaaar tatata bala tu ti aamoo! Daa chasy poulet tikka masala.
                    Minions ipsum la bodaaa hana dul sae daa belloo! Daa poulet tikka masala tatata bala tu bappleees. Gelatooo hana dul sae jiji pepete para tú butt gelatooo potatoooo me want bananaaa! Po kass underweaaar wiiiii chasy para tú hahaha bananaaaa pepete wiiiii. Aaaaaah baboiii po kass poopayee tatata bala tu underweaaar jeje pepete ti aamoo! Bee do bee do bee do ti aamoo! Hahaha belloo! Underweaaar tatata bala tu ti aamoo! Daa chasy poulet tikka masala.
                    Minions ipsum la bodaaa hana dul sae daa belloo! Daa poulet tikka masala tatata bala tu bappleees. Gelatooo hana dul sae jiji pepete para tú butt gelatooo potatoooo me want bananaaa! Po kass underweaaar wiiiii chasy para tú hahaha bananaaaa pepete wiiiii. Aaaaaah baboiii po kass poopayee tatata bala tu underweaaar jeje pepete ti aamoo! Bee do bee do bee do ti aamoo! Hahaha belloo! Underweaaar tatata bala tu ti aamoo! Daa chasy poulet tikka masala.
                </Text>
                </ScrollView>
            )
            bgcolor = styles.night
        }
        // NIGHT MODE BUTTON END


        // SCROLL WRAP BUTTON START

        // SCROLL TEXT IS HARDCODED IN ALL TEXT
const [scrollText, setScrollText] = useState(false);
        var textscroll = null;
        
        // if button true, text scroll
        if (scrollText === true) {
            <ScrollView>
                
            </ScrollView>

        }

        

        // UI STATE
        return (
            <View style={bgcolor}>
                <Switch 
                onValueChange = {(value)=>setNightMode(value)}
                value = {nightMode}
                />
                <Text style={{color:'#FAB'}}>
                    Night Mode
                </Text>
                <Switch
                onValueChange = {(value)=>setScrollText(value)}
                value = {scrollText}
                />
                {statemsg}
            </View>

    )
}
 