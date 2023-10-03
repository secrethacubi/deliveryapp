import React, { useState, useEffect } from "react";
import {
  StatusBar,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

//redux
import { useSelector, useDispatch } from "react-redux";
import { addProduct, clearProducts } from "../redux/reducers/productSlice";
//redux

import { addToCart } from "../Firebase/firestore";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { useRoute } from "@react-navigation/native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const FoodDetails = ({ navigation }) => {
  const route = useRoute();
  const { id, name, description, price, url, rating } = route.params;

  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.items);

  const handleAddProduct = () => {
    const productExists = products.some((product) => product.id === id);

    if (!productExists) {
      dispatch(
        addProduct({ id, name, description, price, url, rating, quantity: 1 })
      );
      navigation.navigate("FoodCart");
    } else {
      navigation.navigate("FoodCart");
    }
  };

  const handleClearProducts = () => {
    dispatch(clearProducts()); // Dispatch the clearProducts action
  };

  return (
    <View>
      <View className="h-1/2 justify-center items-center">
        <Image
          source={{
            uri: url,
          }}
          className="w-full h-full"
          resizeMode="stretch"
        />
      </View>

      <View className="h-1/2 bg-orange-500 rounded-tr-3xl rounded-tl-3xl pt-10 px-6">
        <Text className="font-bold text-lg text-white">
          {name} | $ {price}
        </Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <Text className="text-white mt-4">{description}</Text>
        </ScrollView>
      </View>

      <TouchableOpacity
        className="bg-white h-12 w-64 absolute bottom-10 justify-center items-center rounded-lg self-center rounded-3xl"
        onPress={() => handleAddProduct()}
      >
        <Text className="text-orange-500">Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FoodDetails;
