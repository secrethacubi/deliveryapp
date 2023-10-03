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
import { checkOut } from "../Firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import {
  removeProduct,
  updateProductQuantity,
  clearProducts,
} from "../redux/reducers/productSlice";

const FoodCart = () => {
  const route = useRoute();

  const products = useSelector((state) => state.product.items);
  const dispatch = useDispatch();
  const [totalSum, setTotalSum] = useState(0);
  const user = useSelector((state) => state.user);

  const updateQty = (id, newQuantity) => {
    const product = products.find((product) => product.id === id);
    // console.log(newQuantity);

    if (product && newQuantity != 0) {
      dispatch(updateProductQuantity({ id, quantity: newQuantity }));

      product.quantity = newQuantity;

      console.log(products);

      // calculateTotalSum();
    }
  };

  const handleCheckOut = async () => {
    try {
      const result = await checkOut(
        products,
        totalSum,
        user.fullname,
        user.email,
        user.address,
        user.id
      );

      if (result) {
        dispatch(clearProducts());
        alert("Checkout success");
        setTotalSum(0);
      }
      // console.log(categoriesData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveProduct = (product) => {
    dispatch(removeProduct(product));
  };

  useEffect(() => {
    let sum = 0;
    products.forEach((product) => {
      // Convert product.price to a number and add it to the sum
      sum += parseFloat(product.price) * product.quantity;
    });
    console.log("totalsum", sum);
    setTotalSum(sum);
  }, [products]);

  return (
    <View className="bg-slate-200">
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ height: "100%" }}
      >
        {products.map((product, index) => (
          <TouchableOpacity
            key={product.id}
            className="flex-row w-full h-28 bg-white rounded-2xl mt-4 relative"
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
                  onPress={() => {
                    updateQty(product.id, product.quantity - 1);
                  }}
                >
                  <Ionicons name="remove-outline" size={22} color="black" />
                </TouchableOpacity>

                <View className="flex-1 items-center ">
                  <Text className="">{product.quantity}</Text>
                </View>

                <TouchableOpacity
                  className="flex-1 items-center  bg-orange-500 rounded-md "
                  onPress={() => {
                    updateQty(product.id, product.quantity + 1);
                  }}
                >
                  <Ionicons name="add" size={22} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <View className="absolute right-3 top-1">
              <TouchableOpacity
                className="flex-1 items-center rounded-md"
                onPress={() => handleRemoveProduct(product)}
              >
                <Ionicons name="close-outline" size={22} color="black" />
              </TouchableOpacity>
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
          <TouchableOpacity
            className="self-center h-10 rounded-full bg-orange-500 w-full justify-center items-center"
            onPress={() => handleCheckOut()}
          >
            <Text className="text-white">CHECKOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FoodCart;
