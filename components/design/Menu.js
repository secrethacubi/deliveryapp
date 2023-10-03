import React from "react";
import {
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomizedMenu from "./CustomizedMenu";

const Menu = () => {
  const fruitData = [
    { id: "1", name: "Apple", rating: 4, price: 18.99, time: 10 },
    { id: "2", name: "Banana", rating: 3, price: 16.49, time: 20 },
    { id: "3", name: "Orange", rating: 4, price: 17.25, time: 30 },
    { id: "4", name: "Grapes", rating: 5, price: 19.75, time: 40 },
    { id: "5", name: "Strawberry", rating: 4, price: 18.0, time: 50 },
    { id: "6", name: "Mango", rating: 4, price: 18.5, time: 60 },
    { id: "7", name: "Pineapple", rating: 3, price: 16.99, time: 10 },
    { id: "8", name: "Watermelon", rating: 4, price: 17.75, time: 20 },
    { id: "9", name: "Kiwi", rating: 5, price: 19.25, time: 30 },
    { id: "10", name: "Pear", rating: 4, price: 18.25, time: 40 },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item} className="m-2">
      <View className="h-32 w-full rounded-lg">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1542574271-7f3b92e6c821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80", // Replace with the actual URL of your online image
          }}
          className="w-full h-full rounded-tl-lg  rounded-tr-lg"
          resizeMode="stretch"
        />
      </View>
      <View className="h-18 w-full bg-white px-4 py-2 rounded-bl-lg  rounded-br-lg">
        <Text>{item.name}</Text>
        <View className="flex-row mt-1">
          <View className="items-end mr-1">
            <Ionicons name="time-outline" size={15} color="green" />
          </View>
          <View className="items-end mr-2">
            <Text className="font-black text-xs text-green-400">
              {item.time} mins
            </Text>
          </View>

          <View className="items-end mr-1">
            <FontAwesomeIcon name="star" size={15} color="gold" />
          </View>
          <View className="items-end">
            <Text className="font-black  text-xs">{item.rating}</Text>
          </View>
        </View>

        <View className="mt-2">
          <Text className="font-black  text-m">${item.price}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View className="bg-gray-200 h-full flex">
      <View className="flex-row p-6">
        <View className="flex-1">
          <Text className="font-bold text-3xl">Menu</Text>
        </View>
        <View className="bg-green-800 w-12 rounded-md justify-center items-center">
          <Ionicons name="cart" size={30} color="white" />
        </View>
      </View>

      <View className="px-8">
        <View className="flex-row border-b-2 border-gray-500">
          <View className="justify-center mr-2">
            <Ionicons name="search-outline" size={30} color="gray" />
          </View>
          <View className="flex-1">
            <TextInput
              className="h-9 border-0"
              style={{
                borderWidth: 2,
                borderColor: "gray",
                padding: 10,
              }}
              placeholder="Search"
            />
          </View>
        </View>
      </View>

      <View className="rounded-l-3xl mt-6 h-full w-full bg-emerald-300">
        <View className="flex-row p-5">
          <View>
            <Text className="font-bold text-2xl">All</Text>
          </View>
          <View className="flex-1 ml-4 mt-2">
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              <View>
                <Text>Breakfast</Text>
              </View>
              <View className="ml-4">
                <Text>Lunch</Text>
              </View>
              <View className="ml-4">
                <Text>Drinks</Text>
              </View>
              <View className="ml-4">
                <Text>Dessert</Text>
              </View>

              <View className="ml-4">
                <Text>Burgers</Text>
              </View>
              <View className="ml-4">
                <Text>Treats</Text>
              </View>
            </ScrollView>
          </View>
        </View>

        <FlatList
          data={fruitData}
          numColumns={2} // Display two items per row
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          className="px-6 w-full"
        />
      </View>

      <CustomizedMenu></CustomizedMenu>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
});

export default Menu;
