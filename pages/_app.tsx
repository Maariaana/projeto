import * as React from "react";
import { enableScreens } from "react-native-screens";
enableScreens();
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import UserList from "../pages/user-list";
import UserForm from "../pages/user-form";
import { Button, Icon } from "react-native-elements";


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='UserList'
        screenOptions={screenOptions}
      >
        <Stack.Screen
          name='UserList'
          component={UserList}
          options={({ navigation }) => {
            return {
              title: "Listagem de Usuários",
              headerRight: () => {
                return (
                  <Button
                    onPress={() => navigation.navigate("UserForm")}
                    icon={<Icon name='add' size={25} color='white' />}
                  />
                );
              },
            };
          }}
        />
        <Stack.Screen
          name='UserForm'
          component={UserForm}
          options={{ title: "Formulário de Usuários" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const screenOptions: any = {
  headerStyle: {
    backgroundColor: "#433e3f",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};