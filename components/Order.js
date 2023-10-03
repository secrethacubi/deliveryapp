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
import GifImage from "@lowkey/react-native-gif";
import { useRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { getSingleOrder } from "../Firebase/firestore";

const Order = () => {
  const route = useRoute();
  const { id, status, products, total_sum } = route.params;

  const [orderStatus, setOrderStatus] = useState(status);

  useEffect(() => {
    // Fetch products when the component mounts
    const fetchOrder = async () => {
      try {
        const newOrderStatus = await getSingleOrder(id);
        setOrderStatus(newOrderStatus);
        console.log("Order Status", orderStatus);
      } catch (error) {
        console.log("Error", error);
        // Handle errors here
      }
    };

    fetchOrder();

    const intervalId = setInterval(() => {
      fetchOrder();
    }, 20000);

    return () => {
      clearInterval(intervalId);
    };
  }, [id]);

  return (
    <View className="bg-white h-full">
      {orderStatus === "pending" && (
        <>
          <View className="justify-center items-center">
            <View className="flex-row">
              <View className="flex-1 justify-center items-center">
                <Text>Your order is still pending</Text>
                <Text>Total Bill: {total_sum} </Text>
              </View>
              <View className="h-16 w-16 flex-1 items-start mt-2">
                <GifImage
                  source={{
                    uri: "https://i.pinimg.com/originals/c4/cb/9a/c4cb9abc7c69713e7e816e6a624ce7f8.gif",
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  resizeMode={"cover"}
                />
              </View>
            </View>
          </View>
          <View className="mt-4">
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ height: "100%" }}
            >
              {products.map((product, index) => (
                <TouchableOpacity
                  key={product.id}
                  className="flex-row w-full h-28 bg-slate-200 rounded-2xl mt-4 relative"
                >
                  <View className="pl-2  justify-center items-center">
                    <Image
                      source={{
                        uri: product.url, // Replace with the actual URL of your online image
                      }}
                      className="w-32 h-full"
                      resizeMode="stretch"
                    />
                  </View>

                  <View className="flex-1 pl-4 pt-5 flex-row">
                    <View className="flex-1">
                      <View>
                        <Text className="font-bold text-md">
                          {product.name} x {product.quantity}
                        </Text>
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
                  </View>
                </TouchableOpacity>
              ))}
              <View className="h-44 mt-2">
                <Text></Text>
              </View>
            </ScrollView>
          </View>
        </>
      )}
      {orderStatus === "accepted" && (
        <>
          <View className="mt-20 items-center">
            <Text>
              Your order should be delivered in 20 mins, please wait...
            </Text>
            <View className="h-48 w-48">
              <GifImage
                source={{
                  uri: "https://i.pinimg.com/originals/c4/cb/9a/c4cb9abc7c69713e7e816e6a624ce7f8.gif",
                }}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                resizeMode={"cover"}
              />
            </View>
          </View>
        </>
      )}

      {orderStatus === "declined" && (
        <>
          <View className="mt-20 items-center">
            <Text>Your order is declined, please order again next time.</Text>
            <View className="h-48 w-48">
              <GifImage
                source={{
                  uri: "https://i.pinimg.com/originals/c4/cb/9a/c4cb9abc7c69713e7e816e6a624ce7f8.gif",
                }}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                resizeMode={"cover"}
              />
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default Order;
