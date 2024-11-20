import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

export default ({ route, navigation }: any) => {
  const user = route.params || {};

  return (
    <View style={styles.container}>
      <Text>Formulário de Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        defaultValue={user.name}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        defaultValue={user.email}
      />
      <Button title="Salvar" onPress={() => console.log("Usuário salvo")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
});