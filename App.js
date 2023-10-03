import React, { useState } from "react";
import {
  Button,
  StatusBar,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  AppRegistry,
} from "react-native";
import { styled } from "nativewind";
import MenuList from "./components/design/MenuList";
// import Menu from "./components/design/Menu";
// import Fbase from "./components/Fbase";
// import LoginM from "./components/LoginM";
// import FoodDetails from "./components/FoodDetails";
// import FoodCart from "./components/FoodCart";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import { useSelector, useDispatch } from "react-redux";
import { clearProducts } from "./redux/reducers/productSlice";

import { Provider } from "react-redux";
// import store from "./redux/store";
import store from "./redux/store";

// import Counter from "./components/Counter";
// import Product from "./components/Product";
// import FoodMenu from "./components/FoodMenu";
import Screens from "./components/Screens";

//redux

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Screens></Screens>
      </NavigationContainer>
    </Provider>
  );
  // return (
  //   <>
  //     <StatusBar hidden={true} />
  //     {/* <Fbase></Fbase> */}
  //     {/* <MenuList></MenuList> */}
  //     {/* <Menu></Menu> */}
  //     <BkMenu></BkMenu>
  //     {/* <FoodDetails></FoodDetails> */}
  //     {/* <FoodCart></FoodCart> */}
  //   </>
  // );
}

// AppRegistry.registerComponent("FoodDelivery", () => App);
