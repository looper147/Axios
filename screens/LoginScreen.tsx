import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { TextInput, Appbar, Button } from "react-native-paper";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import fs from "fs";

const API_BASE_URL = "http://localhost:3000";

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setError] = useState("");
  const [valid, setValid] = useState(false);

  const [token, setToken] = useState("");

  // const api = axios.create({
  //   baseURL: API_BASE_URL,
  // });

  // api.interceptors.request.use(
  //   async (config) => {
  //     const storedToken = await AsyncStorage.getItem("token");
  //     if (storedToken) {
  //       config.headers.Authorization = `Bearer ${storedToken}`;
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

  // api.interceptors.response.use(
  //   (response) => {
  //     return response;
  //   },
  //   async (error) => {
  //     if (error.response && error.response.status === 401) {
  //       await AsyncStorage.removeItem("token");
  //       setToken("");
  //     }
  //     return Promise.reject(error);
  //   }
  // );

  const handleLogin = async ({ navigation }: any) => {
    // try {
    //   const response = await api.post(`${API_BASE_URL}/auth/login`, {
    //     email,
    //     password,
    //   });
    //   const token = response.data.token;
    //   // Update the JSON file
    //   setToken(token);
    //   await AsyncStorage.setItem("token", token);
    //   console.log(token);
    //   setValid(true);
    //   navigation.navigate("Home");
    //   // Do something with the token, such as storing it in AsyncStorage or Context
    // } catch (error) {
    //   setValid(false);
    //   setError("Invalid email or password"); // Set the error message
    // }
  };

  useEffect(() => {
    const checkToken = async () => {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
      }
    };

    checkToken();
  }, []);

  return (
    <>
      <Appbar.Header mode="medium">
        <Appbar.Content title="Login now" />
      </Appbar.Header>

      {/* row 1 */}
      <View style={{ flexDirection: "column" }}>
        <TextInput
          mode="outlined"
          placeholder="Enter a email"
          label={"email"}
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          mode="outlined"
          placeholder="Enter a password"
          label={"Password"}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      {/* row 2 */}
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View>
          <Button
            icon={"check"}
            mode="contained"
            onPress={() => handleLogin(navigation)}
          >
            Login
          </Button>
        </View>
      </View>
      {/* row 3 */}
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {errorMessage ? (
          <Text style={valid ? { color: "green" } : { color: "red" }}>
            {errorMessage}
          </Text>
        ) : null}
      </View>
    </>
  );
};

export default LoginScreen;
