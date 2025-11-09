import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, ScrollView, Text, TouchableOpacity, View } from "react-native";

const Projetos = () => {
    return (
        <LinearGradient
            colors={["#660000ff" , "#000000ff"]}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        >
          <ScrollView>
            <Text style={styles.title}>Projetos</Text>
            <View style={styles.section}>
                <Image style={styles.image} source={require("../assets/images/healnetLogo.jpg")} />
                <Text style={styles.sectionTitle}>HealNet</Text>
                <Text style={styles.sectionText}>Landing Page de um site de marcação de consulta médica </Text>
            </View>

            <View style={styles.section}>
                <Image style={styles.image} source={require("../assets/images/jogodasenha.png")} />
                <Text style={styles.sectionTitle}>Bulls & Cows</Text>
                <Text style={styles.sectionText}>Jogo para descobrir qual a senha gerada aleatoriamente pelo algoritmo</Text>
            </View>

            <View style={styles.section}>
              <Image style={styles.image} source={require("../assets/images/conversor.jpg")} />
              <Text style={styles.sectionTitle}>Conversor de Valores</Text>
              <Text style={styles.sectionText}>Site de conversões de valores e medidas.
                 Nele estão presentes conversão de moeda, temperatura, e comprimento.</Text>
            </View>

            <View style={styles.section}>
              <Image style={styles.image} source={require("../assets/images/apicurriculo.jpg")} />
              <Text style={styles.sectionTitle}>API de Currículo</Text>
              <Text style={styles.sectionText}>Projeto de back-end com informações necessárias para um currículo.</Text>
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
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#fff',
  },
});

export default Projetos;