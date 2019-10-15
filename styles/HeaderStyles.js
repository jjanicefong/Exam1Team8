import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    header: {
        flex: 1,
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "15%",
        top: 0,
        paddingTop: 50,
        backgroundColor: "#FFFF99",
    },
    headerText: {
        fontSize: 35
    },
    edit: {
        top: 0,
        right: 0
    }
});

export default styles;