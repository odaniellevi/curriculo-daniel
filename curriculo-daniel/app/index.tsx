import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Location from "expo-location";

export default function IndexDaniel() {
  const router = useRouter();
  const [cidade, setCidade] = useState("");
  const [saudacao, setSaudacao] = useState("");

  useEffect(() => {
    const hora = new Date().getHours();
    if (hora < 12) setSaudacao("Bom dia");
    else if (hora < 18) setSaudacao("Boa tarde");
    else setSaudacao("Boa noite");

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") return;
      let location = await Location.getCurrentPositionAsync({});
      let geo = await Location.reverseGeocodeAsync(location.coords);
      setCidade(geo[0].city || "");
    })();
  }, []);

  return (
    <LinearGradient
      colors={["#660000ff", "#000000ff"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Image
        style={styles.image}
        source={require("../assets/images/daniel.jpg")}
      />

      <View style={styles.saudacaoContainer}>
        <Text style={styles.saudacaoText}>
          {saudacao}! {cidade ? `Você está em ${cidade} ☀️` : ""}
        </Text>
      </View>

      <Text style={styles.title}>Daniel Levi</Text>
      <Text style={styles.text}>
        Meu nome é Daniel, tenho 19 anos e sou desenvolvedor de software.
        Formado em Sistemas de Internet pela Universidade Católica de
        Pernambuco, onde aprendi programação Full-Stack, desenvolvi projetos e
        participei da Residência de Software do Porto Digital.
      </Text>

      <TouchableOpacity
        style={styles.customButton}
        onPress={() => router.push("projetos")}
      >
        <Text style={styles.buttonText}>Projetos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.customButton}
        onPress={() => router.push("academico")}
      >
        <Text style={styles.buttonText}>Acadêmico</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.customButton}
        onPress={() => router.push("experiencia")}
      >
        <Text style={styles.buttonText}>Experiência</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.customButton}
        onPress={() => router.push("contato")}
      >
        <Text style={styles.buttonText}>Contato</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 125,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#5d0000ff",
  },
  saudacaoContainer: {
    marginBottom: 15,
  },
  saudacaoText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 20,
  },
  customButton: {
    backgroundColor: "#5c0000ff",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
