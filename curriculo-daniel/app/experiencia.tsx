import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Experiencia = () => {
    return (
        <LinearGradient
            colors={["#660000ff" , "#000000ff"]}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            >
                <Text style={styles.title}>Experiência</Text>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Residência de Software do Porto Digital 2024-2026</Text>
                    <Text style={styles.sectionText}>Onde vivi a experiência de trabalhar com empresas renomadas,
                         trabalhei em grupo e colaborei com a melhoria de deficiências e crescimento dessas empresas.</Text>
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
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#fff',
  },
});

export default Experiencia;