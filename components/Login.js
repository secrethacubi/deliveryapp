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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MD5 from "react-native-md5";
import { loginWithEmailAndPassword } from "../Firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import GifImage from "@lowkey/react-native-gif";
import { addUser } from "../redux/reducers/userSlice";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const handleLogin = async () => {
    try {
      const hashedPassword = MD5.hex_md5(password);
      const result = await loginWithEmailAndPassword(email, hashedPassword);

      if (result.success) {
        const userDataArray = Object.values(result.userData);
        console.log("user", userDataArray);
        dispatch(
          addUser({
            id: userDataArray[0],
            email: userDataArray[1],
            fullname: userDataArray[2],
            address: userDataArray[3],
            type: userDataArray[4],
            profile_picture: userDataArray[5],
          })
        );

        // navigation.navigate("Menu");
      } else {
        alert("Username or password is incorrect");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <View className="bg-white">
        <View className="h-1/4 w-full justify-center items-center mt-10">
          {/* <View>
            <Image
              source={{
                uri: "https://plus.unsplash.com/premium_photo-1667682209935-b6c87cced668?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80", // Replace with the actual URL of your online image
              }}
              className="w-32 h-3/4 rounded-s-3xl rounded-full"
              resizeMode="center"
            />
          </View> */}

          <GifImage
            source={{
              uri: "https://i.pinimg.com/originals/c4/cb/9a/c4cb9abc7c69713e7e816e6a624ce7f8.gif",
            }}
            style={{
              width: "60%",
              height: "70%",
            }}
            resizeMode={"cover"}
          />

          <Text className="text font-bold text-xl">Elyu Food Delivery App</Text>
        </View>

        <View className="w-full  bg-blue-400 h-3/4 rounded-tr-[20] rounded-tl-[20] p-6 mt-10">
          <Text className="text-black">Email</Text>
          <TextInput
            className="h-10 border p-2 border-gray-600 rounded-lg hover:bg-orange-500"
            placeholder="Email"
            placeholderTextColor="black"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />

          <Text className="text-black mt-4">Password</Text>
          <TextInput
            className="h-10 border p-2 border-gray-600 rounded-lg"
            placeholder="Password"
            placeholderTextColor="black"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            value={password}
          />

          <TouchableOpacity
            className="bg-orange-500 mt-4 rounded-2xl h-10 items-center justify-center mt-10"
            onPress={handleLogin}
          >
            <Text className="text-white text-lg">Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-orange-500 mt-4 rounded-2xl h-10 items-center justify-center"
            onPress={() => navigation.navigate("Signup")}
          >
            <Text className="text-white text-lg">Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Login;
