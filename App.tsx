// import "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/AntDesign";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

//screens
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
//to save token in local storage
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const API_BASE_URL = "http://localhost:3000";

interface User {
  username: string;
  age: number;
}

const Tab = createBottomTabNavigator();
// const navigation = useNavigation();
// const Stack = createNativeStackNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{ tabBarIcon: ({}) => <Icon name="check" size={25} /> }}
      />
      <Tab.Screen
        name="Register"
        component={RegisterScreen}
        options={{ tabBarIcon: ({}) => <Icon name="check" size={25} /> }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  const [data, setData] = useState("");
  const [visible, setVisible] = useState(false);
  //fetch data
  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const response = await axios.get(`${API_BASE_URL}/users`);
  //       setData(response.data);
  //       return null;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   getData();
  // }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tabs />
        {/* <Stack.Navigator initialRouteName="AddDaily"> */}
        {/*add screen */}
        {/* <Stack.Screen
            name="AuthenticationSreen"
            component={Tabs}
            options={{
              headerShown: false,
              animation: "none",
              animationDuration: 899,
            }} */}
        {/* /> */}

        {/*view screen*/}
        {/* <Stack.Screen
            name="ViewItems"
            component={ViewItems}
            options={{
              headerShown: false,
            }}
          />
          </Stack.Navigator> */}
        {/* <Button
        title={visible ? "Hide" : "Show"}
        onPress={visible ? () => setVisible(false) : () => setVisible(true)}
      />

      <Button
        title="Send"
        // onPress={() => createUser(documentId, documentData)}
      />
      <Text>{visible ? JSON.stringify(data) : null}</Text> */}
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
