import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Projetos = () => {
    return (
        <LinearGradient
            colors={["#660000ff" , "#000000ff"]}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        >
            <Text style={styles.title}>Projetos</Text>
            <View style={styles.section}>
                <Image style={styles.image} source={require("../assets/images/healnetLogo.jpg")} />
                <Text style={styles.sectionTitle}>HealNet</Text>
            </View>

            <View style={styles.section}>
                <Image style={styles.image} source={require("../assets/images/jogodasenha.png")} />
                <Text style={styles.sectionTitle}>Bulls & Cows</Text>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 125,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#5d0000ff",
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
});

export default Projetos;