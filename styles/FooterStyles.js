import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({

   text1: {
      fontSize: 20,
      color: "grey",
      right: 170,
      fontStyle: "italic",
   },

   text2: {
      fontSize: 30,
      color: "grey",
      fontWeight: "bold",
      fontStyle: "italic",
      right: 40,
      bottom: 20
   },
   
   footer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#ffd7b5",
    },

    picker: {
        height: 150,
        width: 150,
        position: "absolute",
        right: 20
    }

});

export default styles;