import { connect } from "react-redux";
import React, { useState } from "react";
import {
  StatusBar,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/reducers/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter);
  console.log("counter", count);
  const dispatch = useDispatch();

  return (
    <View>
      <View>
        <Text>{count}</Text>
      </View>
      <TouchableOpacity onPress={() => dispatch(increment())}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(decrement())}>
        <Text>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Counter;
