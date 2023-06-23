import React from "react";
import { View, StyleSheet } from "react-native";
import { Appbar, Button, Card, Title, Paragraph } from "react-native-paper";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Home" />
      </Appbar.Header>

      <Card>
        <Card.Content>
          <Title>Welcome to the Home Screen</Title>
          <Paragraph>
            This is a sample home screen using React Native Paper components.
          </Paragraph>
        </Card.Content>
      </Card>

      <Button mode="contained" style={styles.button}>
        Click Me
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    margin: 16,
  },
});

export default HomeScreen;
