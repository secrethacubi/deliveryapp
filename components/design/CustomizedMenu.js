import React from "react";
import { Image, ScrollView, View, Text, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../redux/reducers/userSlice";

const CustomizedMenu = ({ navigation }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const logOut = () => {
    dispatch(removeUser());
  };

  return (
    <>
      <View className="h-14 w-full flex-row bg-white absolute bottom-0 rounded-tl-3xl rounded-tr-3xl pt-2 px-10 border-2 border-gray-200">
        {user.type === "user" && (
          <>
            <TouchableOpacity
              className="flex-1 justify-between items-center"
              onPress={() => {
                navigation.navigate("Menu", {});
              }}
            >
              <Ionicons name="home" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-1 justify-between items-center"
              onPress={() => {
                navigation.navigate("FoodCart", {
                  id: "6kXnfADGKygwKygBU1kI",
                });
              }}
            >
              <Ionicons name="cart" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-1 justify-between items-center"
              onPress={() => {
                navigation.navigate("OrderList", {});
              }}
            >
              <Ionicons name="card-outline" size={30} color="black" />
            </TouchableOpacity>
          </>
        )}

        <TouchableOpacity
          className="flex-1 justify-between items-center"
          onPress={logOut}
        >
          <Ionicons name="log-out-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CustomizedMenu;
