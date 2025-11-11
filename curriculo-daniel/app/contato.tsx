import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const Contato = () => {
    return (
        <LinearGradient
            colors={["#660000ff" , "#000000ff"]}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            >
                <ScrollView>
                <Text style={styles.title}>Contato</Text>
                <Image style={styles.image} source={require("../assets/images/whatsapp.png")} />
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Whatsapp</Text>
                    <Text style={styles.sectionText}>8199999-9999</Text>
                </View>

                <Image style={styles.image} source={require("../assets/images/github.jpg")} />
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>GitHub</Text>
                    <Text style={styles.sectionText}>@odaniellevi</Text>
                </View>

                <Image style={styles.image} source={require("../assets/images/linkedin.png")} />
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>LinkedIn</Text>
                    <Text style={styles.sectionText}>@imdaniellevi</Text>
                </View>

                <Image style={styles.image} source={require("../assets/images/email.jpg")} />
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>E-mail</Text>
                    <Text style={styles.sectionText}>danilevi20025@outlook.com</Text>
                </View>
                </ScrollView>
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 125,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#5d0000ff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 40,
  },
  text: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    padding: 7,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
    textAlign: "center",
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#fff',
    textAlign: "center",
  },
});

export default Contato;