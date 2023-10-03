import React, { useEffect, useState } from "react";
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
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { getCategories, getProducts } from "../Firebase/firestore";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomizedMenu from "./design/CustomizedMenu";

import { useSelector, useDispatch } from "react-redux";

const FoodMenu = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [productSearchQuery, setProductSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const user = useSelector((state) => state.user);

  const clickCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const clickItem = (id) => {
    console.log(id);
  };

  useEffect(() => {
    // Fetch products when the component mounts
    const fetchProducts = async () => {
      try {
        const categoryName = selectedCategory;
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.log("Error", error);
        // Handle errors here
      }
    };

    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);

        // console.log(categoriesData);
      } catch (error) {
        // Handle errors here
      }
    };

    fetchCategories();
    fetchProducts();
  }, [selectedCategory]);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(productSearchQuery.toLowerCase()) &&
      product.category.toLowerCase().includes(selectedCategory.toLowerCase())
  );

  return (
    <>
      <View className="w-full h-full p-4 bg-slate-100 mt-5">
        <View className="flex-row">
          <View className="flex-1">
            <Text className="text-lg">
              Hello, <Text className="font-bold">{user.fullname}</Text>
            </Text>
            <Text className="mt-1 ">What do you want today</Text>
          </View>
          <View className="flex-1 items-end">
            <Image
              source={{
                uri: user.profile_picture,
              }}
              className="w-12 h-12 rounded-full"
            />
          </View>
        </View>

        <View className="flex-row mt-6">
          <View className="flex-1 mr-2">
            <View className="flex-row bg-gray-200 items-center rounded-lg">
              <View className="ml-3">
                <Ionicons name="search-outline" size={20} color="black" />
              </View>
              <View class="flex-1">
                <TextInput
                  className="h-9 border-0"
                  style={{
                    borderWidth: 2,
                    borderColor: "gray",
                    padding: 10,
                  }}
                  placeholder="Search for food"
                  value={productSearchQuery}
                  onChangeText={(text) => setProductSearchQuery(text)}
                />
              </View>
            </View>
          </View>

          <View className="items-end">
            <View className="h-9 w-8 bg-orange-400 justify-center items-center">
              <FontAwesomeIcon name="tasks" size={20} color="white" />
            </View>
          </View>
        </View>
        <View className="h-20">
          <ScrollView
            horizontal={true}
            className="flex-row"
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <View className="flex-row pt-4">
              {categories.map((category, index) => (
                <TouchableOpacity
                  key={category.id}
                  className="flex-row h-12 w-[120] bg-orange-200 rounded-3xl p-2 ml-1"
                  onPress={() => clickCategory(category.name)}
                >
                  <View>
                    <Image
                      source={{
                        uri: category.url, // Replace with the actual URL of your online image
                      }}
                      className="w-8 h-8 rounded-full"
                      resizeMode="center"
                    />
                  </View>
                  <View className="justify-center ml-2">
                    <Text className="">{category.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        <View className="h-[60%]">
          <ScrollView showsVerticalScrollIndicator={false}>
            {filteredProducts.map((product, index) => (
              <TouchableOpacity
                key={product.id}
                className="flex-row w-full h-28 bg-white rounded-2xl mt-4"
                onPress={() =>
                  navigation.navigate("FoodDetails", {
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    url: product.url,
                    rating: product.rating,
                  })
                }
              >
                <View className="pl-2 pt-2 justify-center items-center">
                  <Image
                    source={{
                      uri: product.url,
                    }}
                    className="w-32 h-[110]"
                    resizeMode="stretch"
                  />
                </View>

                <View className="flex-1 pl-4 pt-5">
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
              </TouchableOpacity>
            ))}
            <View className="h-6 mt-2">
              <Text></Text>
            </View>
          </ScrollView>
        </View>
      </View>
      <CustomizedMenu navigation={navigation}></CustomizedMenu>
    </>
  );
};

export default FoodMenu;
