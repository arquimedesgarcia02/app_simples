import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        padding: 15,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',

    },
    title: {
        fontSize: 36,
        color: '#1C7DB7',
        textAlign: "left",

    },
    text: {
        fontSize: 25,
        color: '#000000',
        marginTop: 200,
        margin: 10,
        textAlign: "justify",

    }
});

export default styles;