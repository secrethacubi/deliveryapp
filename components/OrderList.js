import React, { useState, useEffect } from "react";
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

import { getCartItemsForUser } from "../Firebase/firestore";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { useSelector, useDispatch } from "react-redux";
import CustomizedMenu from "./design/CustomizedMenu";
import { getOrders } from "../Firebase/firestore";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const OrderList = ({ navigation }) => {
  const [orders, setOrders] = useState([]);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    // Fetch products when the component mounts
    const fetchOrders = async () => {
      try {
        const ordersData = await getOrders(user.id);
        setOrders(ordersData);
        console.log(ordersData);
        // console.log(categoryName);
      } catch (error) {
        console.log("Error", error);
        // Handle errors here
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <View className="bg-slate-200 p-6">
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ height: "100%" }}
        >
          {orders.map((order, index) => (
            <TouchableOpacity
              key={order.id}
              className="h-20 w-full bg-orange-500 my-3 p-2 rounded-lg"
              onPress={() => {
                navigation.navigate("Order", {
                  id: order.id,
                  status: order.status,
                  products: order.product_items,
                  total_sum: order.total_sum,
                });
              }}
            >
              <Text className="text-white">Order ID: {order.id}</Text>
              <Text className="text-white">Total ${order.total_sum}</Text>
              <Text className="text-white">Status {order.status}</Text>
            </TouchableOpacity>
          ))}
          <View className="h-44 mt-2">
            <Text></Text>
          </View>
        </ScrollView>
      </View>
      <CustomizedMenu navigation={navigation}></CustomizedMenu>
    </>
  );
};

export default OrderList;
