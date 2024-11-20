import React from "react";
import { FlatList, View, Alert } from "react-native";
import { Avatar, ListItem, Button, Icon } from "react-native-elements";
import users from '../src/data/users';

interface User {
  id: number;
  name: string;
  email: string;
  avatarUrl: string;
}

export default ({ navigation }: any) => {
  function getUserItem({ item: user }: { item: User }) {
    return (
      <ListItem bottomDivider>
        <Avatar source={{ uri: user.avatarUrl }} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        {getActions(user)}
      </ListItem>
    );
  }

function getActions(user: User) {
    return (
        <>
            <Button 
                onPress={() => navigation.navigate("UserForm", user)} 
                type="clear"
                icon={<Icon name="edit" size={25} color='red' />}
            />
            <Button 
                onPress={() => confirmUserDeletion(user)} 
                type="clear"
                icon={<Icon name='trash' size={25} color='red' />}
            />
        </>
    );
}

  function confirmUserDeletion(user: User) {
    console.log("Deletou o ", user);
    Alert.alert(
        `Excluir Usuário`, 
        `Deseja realmente excluir o usuário ${user.name}?`,
      [
        {
            text: 'Sim',
            onPress: () => console.warn('Deletou o usuário' + user.id),
        },
      {
        text: "Não",
      },
      ]
    );
  }


  return (
    <View>
      <FlatList
        keyExtractor={(user: User) => user.id.toString()}
        data={users}
        renderItem={getUserItem}
      />
    </View>
  );
};