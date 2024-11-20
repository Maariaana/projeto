import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

export default () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const handleSubmit = () => {
    const { nome, email, assunto, mensagem } = form;

    if (!nome || !email || !assunto || !mensagem) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }

    Alert.alert("Sucesso", "Contato enviado com sucesso!");
    setForm({ nome: "", email: "", assunto: "", mensagem: "" });
  };

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Entre em contato</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={form.nome}
        onChangeText={(value) => handleChange("nome", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={form.email}
        onChangeText={(value) => handleChange("email", value)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Assunto"
        value={form.assunto}
        onChangeText={(value) => handleChange("assunto", value)}
      />
      <TextInput
        style={[styles.input, styles.areaTexto]}
        placeholder="Mensagem"
        value={form.mensagem}
        onChangeText={(value) => handleChange("mensagem", value)}
        multiline
        numberOfLines={4}
      />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  areaTexto: {
    height: 100,
  },
});