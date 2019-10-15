import {StyleSheet} from 'react-native';
 
var styles = StyleSheet.create({
  menu: {
    position: "absolute",
    zIndex: 100
  },
  image: {
    width: 50,
    height: 50,
    top: 0,
    left: 0,
    margin: 15
  },
  content: {
    padding: 15,
    backgroundColor: "white",
    height: 800,
    width: 125,
    top: 0,
    left: 0,
    position: "absolute",
    zIndex: -100
  }
});
 
export default styles;
