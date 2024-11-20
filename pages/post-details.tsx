import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

interface Post {
  id: number;
  titulo: string;
  conteudo: string;
  comentarios: string[];
}

export default ({ route }: any) => {
  const { post }: { post: Post } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{post.titulo}</Text>
      <Text style={styles.content}>{post.conteudo}</Text>
      <Text style={styles.cabComentarios}>Comentários:</Text>
      <FlatList
        data={post.comentarios}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.comentario}>{item}</Text>}
      />
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
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 20,
  },
  cabComentarios: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  comentario: {
    fontSize: 14,
    marginBottom: 5,
  },
});