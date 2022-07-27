import React from "react";
import { View, Text } from "react-native";

// importando o estilo:
import styles from "../styles/Style";

export default HomeScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.homeTitle}>App Simples!</Text>
        </View>
    );
}