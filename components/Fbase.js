import React from "react";
import { View, Text, Button, TextInput } from "react-native";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"; // Import Firebase auth functions
import firebase from "../Firebase/firebaseConfig";

export default function Fbase() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignIn = async () => {
    try {
      const auth = getAuth(firebase); // Initialize Firebase Auth with your app instance
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created successfully");
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  };

  return (
    <View>
      <Text>React Native Firebase Example</Text>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Create User" onPress={handleSignIn} />
    </View>
  );
}
