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
    var statemsg = null;
    var bgcolor = null;
const [nightMode, setNightMode] = useState(false);

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

const [scrollText, setScrollText] = useState(true);

        var textscroll = null;
        
        // if button true, text scroll
        if (scrollText === false && bgcolor === styles.night){
            statemsg = 
            <View>
                <Text style={{color:'white'}}>
                    Minions ipsum la bodaaa hana dul sae daa belloo! Daa poulet tikka masala tatata bala tu bappleees. Gelatooo hana dul sae jiji pepete para tú butt gelatooo potatoooo me want bananaaa! Po kass underweaaar wiiiii chasy para tú hahaha bananaaaa pepete wiiiii. Aaaaaah baboiii po kass poopayee tatata bala tu underweaaar jeje pepete ti aamoo! Bee do bee do bee do ti aamoo! Hahaha belloo! Underweaaar tatata bala tu ti aamoo! Daa chasy poulet tikka masala.
                    Minions ipsum la bodaaa hana dul sae daa belloo! Daa poulet tikka masala tatata bala tu bappleees. Gelatooo hana dul sae jiji pepete para tú butt gelatooo potatoooo me want bananaaa! Po kass underweaaar wiiiii chasy para tú hahaha bananaaaa pepete wiiiii. Aaaaaah baboiii po kass poopayee tatata bala tu underweaaar jeje pepete ti aamoo! Bee do bee do bee do ti aamoo! Hahaha belloo! Underweaaar tatata bala tu ti aamoo! Daa chasy poulet tikka masala.
                    Minions ipsum la bodaaa hana dul sae daa belloo! Daa poulet tikka masala tatata bala tu bappleees. Gelatooo hana dul sae jiji pepete para tú butt gelatooo potatoooo me want bananaaa! Po kass underweaaar wiiiii chasy para tú hahaha bananaaaa pepete wiiiii. Aaaaaah baboiii po kass poopayee tatata bala tu underweaaar jeje pepete ti aamoo! Bee do bee do bee do ti aamoo! Hahaha belloo! Underweaaar tatata bala tu ti aamoo! Daa chasy poulet tikka masala.
                    Minions ipsum la bodaaa hana dul sae daa belloo! Daa poulet tikka masala tatata bala tu bappleees. Gelatooo hana dul sae jiji pepete para tú butt gelatooo potatoooo me want bananaaa! Po kass underweaaar wiiiii chasy para tú hahaha bananaaaa pepete wiiiii. Aaaaaah baboiii po kass poopayee tatata bala tu underweaaar jeje pepete ti aamoo! Bee do bee do bee do ti aamoo! Hahaha belloo! Underweaaar tatata bala tu ti aamoo! Daa chasy poulet tikka masala.
                </Text>
            </View>
        // if (bgcolor = styles.app)
        } else if (scrollText === false && bgcolor === styles.app){
            statemsg = 
        <View>
                <Text style={{color:'black'}}>
                    Minions ipsum la bodaaa hana dul sae daa belloo! Daa poulet tikka masala tatata bala tu bappleees. Gelatooo hana dul sae jiji pepete para tú butt gelatooo potatoooo me want bananaaa! Po kass underweaaar wiiiii chasy para tú hahaha bananaaaa pepete wiiiii. Aaaaaah baboiii po kass poopayee tatata bala tu underweaaar jeje pepete ti aamoo! Bee do bee do bee do ti aamoo! Hahaha belloo! Underweaaar tatata bala tu ti aamoo! Daa chasy poulet tikka masala.
                    Minions ipsum la bodaaa hana dul sae daa belloo! Daa poulet tikka masala tatata bala tu bappleees. Gelatooo hana dul sae jiji pepete para tú butt gelatooo potatoooo me want bananaaa! Po kass underweaaar wiiiii chasy para tú hahaha bananaaaa pepete wiiiii. Aaaaaah baboiii po kass poopayee tatata bala tu underweaaar jeje pepete ti aamoo! Bee do bee do bee do ti aamoo! Hahaha belloo! Underweaaar tatata bala tu ti aamoo! Daa chasy poulet tikka masala.
                    Minions ipsum la bodaaa hana dul sae daa belloo! Daa poulet tikka masala tatata bala tu bappleees. Gelatooo hana dul sae jiji pepete para tú butt gelatooo potatoooo me want bananaaa! Po kass underweaaar wiiiii chasy para tú hahaha bananaaaa pepete wiiiii. Aaaaaah baboiii po kass poopayee tatata bala tu underweaaar jeje pepete ti aamoo! Bee do bee do bee do ti aamoo! Hahaha belloo! Underweaaar tatata bala tu ti aamoo! Daa chasy poulet tikka masala.
                    Minions ipsum la bodaaa hana dul sae daa belloo! Daa poulet tikka masala tatata bala tu bappleees. Gelatooo hana dul sae jiji pepete para tú butt gelatooo potatoooo me want bananaaa! Po kass underweaaar wiiiii chasy para tú hahaha bananaaaa pepete wiiiii. Aaaaaah baboiii po kass poopayee tatata bala tu underweaaar jeje pepete ti aamoo! Bee do bee do bee do ti aamoo! Hahaha belloo! Underweaaar tatata bala tu ti aamoo! Daa chasy poulet tikka masala.
                </Text>

            </View>

        }
        // UI STATE

        return (

            <View style={bgcolor}>
                <Switch 
                onValueChange = {(value)=>setNightMode(value)}
                value = {nightMode}
                />
                <View>
                <Text style={{color:'#FAB'}}>
                    Night Mode
                </Text>
                </View>
                <View>
                <Text style={{color:'#FAB'}}>
                    Scroll View
                </Text>
                </View>
                <Switch
                onValueChange = {(value)=>setScrollText(value)}
                value = {scrollText}
                />
                {statemsg}
            </View>

    )
}
 