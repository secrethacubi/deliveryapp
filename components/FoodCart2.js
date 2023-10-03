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
import { useRoute } from "@react-navigation/native";

import { updateQuantity } from "../Firebase/firestore";

const FoodCart = () => {
  const route = useRoute();
  const { id } = route.params;

  const [products, setProducts] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  const fetchCart = async () => {
    try {
      const get_data = await getCartItemsForUser("6kXnfADGKygwKygBU1kI");
      setProducts(get_data);

      // Calculate the total sum based on the fetched cart items
      const newTotalSum = get_data.reduce((accumulator, product) => {
        return accumulator + product.price * product.quantity;
      }, 0);
      setTotalSum(newTotalSum);
    } catch (error) {}
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const updateProductQuantity = async (action, document_id) => {
    await updateQuantity(action, document_id);
    fetchCart();
  };

  return (
    <View className="bg-slate-200">
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ height: "100%" }}
      >
        {products.map((product, index) => (
          <TouchableOpacity
            key={product.document_id}
            className="flex-row w-full h-28 bg-white rounded-2xl mt-4 "
          >
            <View className="pl-2 pt-2 justify-center items-center">
              <Image
                source={{
                  uri: product.url, // Replace with the actual URL of your online image
                }}
                className="w-32 h-[110]"
                resizeMode="stretch"
              />
            </View>

            <View className="flex-1 pl-4 pt-5 flex-row">
              <View className="flex-1">
                <View>
                  <Text className="font-bold text-md">{product.name}</Text>
                </View>
                <View className="mt-1 flex-row items-center">
                  <FontAwesomeIcon name="star" size={15} color="gold" />
                  <Text className="text-gray-400">{product.rating}</Text>
                </View>
                <View>
                  <Text className="font-bold text-md mt-2">
                    ${product.price}
                  </Text>
                </View>
              </View>

              <View className="flex-1 justify-center items-center flex-row pr-8">
                <TouchableOpacity
                  className="flex-1 items-center  bg-orange-500 rounded-md "
                  onPress={() =>
                    updateProductQuantity("minus", product.document_id)
                  }
                >
                  <Ionicons name="remove-outline" size={22} color="black" />
                </TouchableOpacity>

                <View className="flex-1 items-center ">
                  <Text className="">{product.quantity}</Text>
                </View>

                <TouchableOpacity
                  className="flex-1 items-center  bg-orange-500 rounded-md "
                  onPress={() =>
                    updateProductQuantity("plus", product.document_id)
                  }
                >
                  <Ionicons name="add" size={22} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
        <View className="h-44 mt-2">
          <Text></Text>
        </View>
      </ScrollView>

      <View className="h-44 w-full absolute bottom-0 z-50 bg-white p-2">
        <View className="flex-row">
          <View className="flex-1">
            <Text className="text-bold text-xl">Total Price</Text>
          </View>
          <View className="flex-1 items-end">
            <Text className="text-bold text-3xl">${totalSum}</Text>
          </View>
        </View>
        <View className="px-10 mt-10">
          <TouchableOpacity className="self-center h-10 rounded-full bg-orange-500 w-full justify-center items-center">
            <Text className="text-white">CHECKOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FoodCart;
