import React, { useState } from "react";
import {
  StatusBar,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // You can add your login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <>
      <View className="items-center justify-center px-6">
        <Image
          source={{
            uri: "https://plus.unsplash.com/premium_photo-1676047258590-8a8a2a583050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80", // Replace with the actual URL of your online image
          }}
          className="w-32 h-32 mt-14 rounded-s-3xl"
        />

        <View className="absolute top-[175] left-10 z-50">
          <Text className="text-2xl mt-4">LOGIN</Text>
        </View>

        <View className="h-64 w-full  bg-slate-100 mt-6 rounded-xl border-black p-8">
          {/* Username Field */}
          <Text>Username</Text>
          <TextInput
            className="border-green-500"
            style={{
              borderWidth: 1,
              //   borderColor: "black",
              borderRadius: 5,
              height: 40,
              paddingLeft: 10,
              marginTop: 10,
            }}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />

          {/* Password Field */}
          <Text className="mt-4">Password</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 5,
              height: 40,
              paddingLeft: 10,
              marginTop: 2,
            }}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          {/* Login Button */}
          <TouchableOpacity
            style={{
              backgroundColor: "blue",
              borderRadius: 5,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
            onPress={handleLogin}
          >
            <Text style={{ color: "white" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Login;
