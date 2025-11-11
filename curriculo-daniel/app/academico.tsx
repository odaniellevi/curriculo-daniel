import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const Academico = () => {
    return (
        <LinearGradient
            colors={["#660000ff" , "#000000ff"]}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            >
                
            </LinearGradient>
    )
}