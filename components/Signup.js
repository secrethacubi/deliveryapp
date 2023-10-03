import React, { useState } from "react";
import {
  StatusBar,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  AppRegistry,
} from "react-native";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import firebase from "../Firebase/firebaseConfig";
import MD5 from "react-native-md5";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const db = getFirestore(firebase);
  const auth = getAuth(firebase);

  const handleSignup = async () => {
    if (password != confirmPassword) {
      alert("Password should match");
    } else {
      try {
        const hashedPassword = MD5.hex_md5(password);

        const auth = getAuth(firebase);

        await createUserWithEmailAndPassword(auth, email, password, address);
        const userDocRef = doc(db, "users", auth.currentUser.uid);
        const userData = {
          fullname,
          email,
          password: hashedPassword,
          address,
        };
        await setDoc(userDocRef, userData);

        setConfirmPassword("");
        setPassword("");
        setEmail("");
        setAddress("");
        setFullName("");

        alert("User created successfully");
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <View className="p-10">
      <Text className="text-gray-500">Full Name</Text>
      <TextInput
        placeholder="Full Name"
        onChangeText={(text) => setFullName(text)}
        value={fullname}
        className="h-10 border p-2 border-gray-600 rounded-lg"
      />
      <Text className="text-gray-500 mt-6">Email</Text>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        className="h-10 border p-2 border-gray-600 rounded-lg"
      />
      <Text className="text-gray-500 mt-6 ">Password</Text>
      <TextInput
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
        className="h-10 border p-2 border-gray-600 rounded-lg"
      />

      <Text className="text-gray-500 mt-6 ">Confirm Password</Text>
      <TextInput
        placeholder="Confirm Password"
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        secureTextEntry={true}
        className="h-10 border p-2 border-gray-600 rounded-lg"
      />

      <Text className="text-gray-500 mt-6 ">Address</Text>
      <TextInput
        placeholder="Address"
        onChangeText={(text) => setAddress(text)}
        value={address}
        style={{
          paddingVertical: 10,
        }}
        className="h-10 border p-2 border-gray-600 rounded-lg"
      />

      <TouchableOpacity
        className="h-12 w-full rounded-lg mt-6 justify-center items-center bg-orange-500"
        onPress={handleSignup}
      >
        <Text className="text-white">Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;
