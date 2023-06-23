import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Appbar, Button, Text, Snackbar } from "react-native-paper";

//axios
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { RadioButton } from "react-native-paper";

const API_BASE_URL = "http://localhost:3000";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Admin");
  const [valid, setValid] = useState(false);
  const [errorMessage, setError] = useState("");

  // Passing configuration object to axios

  const RolesRadio = () => {
    return (
      <View>
        <RadioButton.Group
          onValueChange={(newValue) => setRole(newValue)}
          value={role}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text>Admin</Text>
              <RadioButton value="Admin" />
            </View>

            <View style={{ flex: 1 }}>
              <Text>User</Text>
              <RadioButton value="User" />
            </View>
          </View>
        </RadioButton.Group>
      </View>
    );
  };
  const createUser = async (user: any) => {
    // Run the code until an error occurs
    try {
      // Send a POST request to the specified URL using axios and provide the user object as the request payload
      const response = await axios.post(`${API_BASE_URL}/users`, user);
      // Log the response data to the console
      console.log(response.data);
    } catch (error) {
      // Catch and handle any errors that occurred during the request
      console.error(error);
    }
  };

  const newUser = {
    username: username,
    email: email,
    password: password,
    role: role,
  };
  const handleRegisteration = () => {
    // Define an asynchronous function called createUser that takes a user parameter
    if (username.trim() && email.trim() && password.trim() && role.trim()) {
      createUser(newUser);
      setError("User registered.");
      setUsername("");
      setEmail("");
      setPassword("");
      setValid(true);
    } else {
      setValid(false);
      setError("Please complete the form.");
    }
  };

  return (
    <>
      <Appbar.Header mode="medium">
        <Appbar.Content title="Register now" />
      </Appbar.Header>

      {/* row 1 */}
      <TextInput
        mode="outlined"
        placeholder="Enter a username"
        label={"Username"}
        value={username}
        onChangeText={(username) => setUsername(username)}
      />
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

      {/* row 2 */}

      <RolesRadio />

      <View>
        <Button
          icon={"check"}
          mode="contained"
          onPress={() => handleRegisteration()}
        >
          Register
        </Button>
      </View>

      {/* row 3 */}

      <View>
        {errorMessage ? (
          <Text style={valid ? { color: "green" } : { color: "red" }}>
            {errorMessage}
          </Text>
        ) : null}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default RegisterScreen;
