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
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FoodMenu from "./FoodMenu";
import FoodCart from "./FoodCart";
import FoodDetails from "./FoodDetails";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import { useSelector, useDispatch } from "react-redux";
import { clearProducts } from "../redux/reducers/productSlice";
import OrderList from "./OrderList";
import Order from "./Order";
import Signup from "./Signup";
import Login from "./Login";
import Admin from "./Admin";

const Stack = createNativeStackNavigator();

const Screens = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <Stack.Navigator>
        {!user?.id && ( // Check if user.id is null or undefined
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        )}
        {user && user.type === "admin" && (
          <>
            <Stack.Screen name="Admin" component={Admin} />
          </>
        )}

        {user && user.type === "user" && (
          <>
            <Stack.Screen
              name="Menu"
              component={FoodMenu}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="FoodCart"
              component={FoodCart}
              options={({ navigation }) => ({
                title: "Cart",
                // headerRight: () => (
                //   <TouchableOpacity
                //     onPress={() => {
                //       dispatch(clearProducts());
                //     }}
                //     className="h-10 w-12 bg-orange-500 justify-center items-center rounded-lg"
                //   >
                //     <Ionicons name="trash" size={22} color="black" />
                //   </TouchableOpacity>
                // ),
              })}
            />
            <Stack.Screen name="FoodDetails" component={FoodDetails} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen
              name="OrderList"
              component={OrderList}
              options={() => ({
                title: "Orders",
              })}
            />

            <Stack.Screen
              name="Order"
              component={Order}
              options={() => ({
                title: "Order Activity",
              })}
            />
          </>
        )}
      </Stack.Navigator>
    </>
  );
};

export default Screens;
