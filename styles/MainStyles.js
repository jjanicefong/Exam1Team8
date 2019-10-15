import {StyleSheet} from 'react-native';
 
var styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  head: {
    backgroundColor: "yellow",
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    backgroundColor: "teal",
    flex: 5,
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  foot: {
    backgroundColor: "orange",
    flex: 1,
    padding: 20,
    height: "auto",
    justifyContent: "center",
    alignItems: "center"
  }

});
 
export default styles;
