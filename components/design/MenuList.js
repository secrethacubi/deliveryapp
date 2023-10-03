import React from "react";
import { Image, ScrollView, View, Text, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomizedMenu from "./CustomizedMenu";

const MenuList = () => {
  return (
    <>
      <ScrollView>
        <View className="w-full h-64 bg-slate-500 relative">
          <View className="bg-green-800 w-12 rounded-md justify-center items-center absolute z-50 top-5 left-6">
            <Ionicons name="chevron-back-outline" size={30} color="white" />
          </View>

          <View className="bg-green-800 w-12 rounded-md justify-center items-center absolute z-50 top-5 right-5">
            <Ionicons name="cart" size={30} color="white" />
          </View>

          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1542574271-7f3b92e6c821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80", // Replace with the actual URL of your online image
            }}
            className="w-full h-full rounded-s-3xl"
            resizeMode="stretch"
          />
        </View>

        <View className="flex flex-row p-4">
          <View className="flex-1">
            <Text className="font-black">Tripple Patty King Burger</Text>
            <Text className="font-black mt-1">25$</Text>
          </View>

          <View className="items-end mr-1">
            <Ionicons name="time-outline" size={15} color="green" />
          </View>

          <View className="items-end mr-2">
            <Text className="font-black text-xs text-green-400">20 mins</Text>
          </View>

          <View className="items-end mr-1">
            <FontAwesomeIcon name="star" size={15} color="gold" />
          </View>
          <View className="items-end">
            <Text className="font-black  text-xs">4.5</Text>
          </View>
        </View>

        <View className="px-4">
          <Text>
            A triple patty burger is a decadent delight, featuring three
            succulent beef patties cooked to perfection and layered with melted
            cheese, sandwiched between a soft, toasted bun. It's typically
            dressed with condiments like ketchup, mustard, or mayo and adorned
            with fresh lettuce, tomato, and red onion, creating a savory and
            satisfying explosion of flavors in every bite.
          </Text>
          <Text className="mt-4 font-bold text-lg">Recently Viewed</Text>
          <ScrollView
            horizontal={true}
            className="flex-row"
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <View className="flex-row">
              <TouchableOpacity className="flex-row">
                <View className="w-24 h-24">
                  <Image
                    source={{
                      uri: "https://images.unsplash.com/photo-1542574271-7f3b92e6c821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80", // Replace with the actual URL of your online image
                    }}
                    className="w-24 h-24 rounded-s-3xl"
                    resizeMode="stretch"
                  />

                  <Text>12</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity className="flex-row ml-2">
                <View className="w-24 h-24">
                  <Image
                    source={{
                      uri: "https://images.unsplash.com/photo-1542574271-7f3b92e6c821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80", // Replace with the actual URL of your online image
                    }}
                    className="w-24 h-24 rounded-s-3xl"
                    resizeMode="stretch"
                  />

                  <Text>12</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity className="flex-row ml-2">
                <View className="w-24 h-24">
                  <Image
                    source={{
                      uri: "https://images.unsplash.com/photo-1542574271-7f3b92e6c821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80", // Replace with the actual URL of your online image
                    }}
                    className="w-24 h-24 rounded-s-3xl"
                    resizeMode="stretch"
                  />

                  <Text>12</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity className="flex-row ml-2">
                <View className="w-24 h-24">
                  <Image
                    source={{
                      uri: "https://images.unsplash.com/photo-1542574271-7f3b92e6c821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80", // Replace with the actual URL of your online image
                    }}
                    className="w-24 h-24 rounded-s-3xl"
                    resizeMode="stretch"
                  />

                  <Text>12</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity className="flex-row ml-2">
                <View className="w-24 h-24">
                  <Image
                    source={{
                      uri: "https://images.unsplash.com/photo-1542574271-7f3b92e6c821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80", // Replace with the actual URL of your online image
                    }}
                    className="w-24 h-24 rounded-s-3xl"
                    resizeMode="stretch"
                  />

                  <Text>12</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity className="flex-row ml-2">
                <View className="w-24 h-24">
                  <Image
                    source={{
                      uri: "https://images.unsplash.com/photo-1542574271-7f3b92e6c821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80", // Replace with the actual URL of your online image
                    }}
                    className="w-24 h-24 rounded-s-3xl"
                    resizeMode="stretch"
                  />

                  <Text>12</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      <View className="px-6 w-full absolute bottom-16 z-50 flex-row">
        <View className="mr-2 bg-green-700 w-10 rounded-md justify-center items-center">
          <Ionicons name="heart" size={30} color="white" />
        </View>
        <TouchableOpacity className=" bg-green-700 rounded-sm  h-[7vh] flex-1 justify-center">
          <Text className="self-center font-extrabold text-white">
            ADD TO CART
          </Text>
        </TouchableOpacity>
      </View>
      <CustomizedMenu></CustomizedMenu>
    </>
  );
};

export default MenuList;
