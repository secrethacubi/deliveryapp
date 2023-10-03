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
import {
  addProduct,
  removeProduct,
  clearProducts,
} from "../redux/reducers/productSlice";

function Product() {
  const products = useSelector((state) => state.product.items);
  const dispatch = useDispatch();

  const [productname, setProductname] = useState("");

  console.log(products);

  const handleAddProduct = () => {
    dispatch(addProduct({ id: "1", name: productname }));
    setProductname("");
  };

  const handleRemoveProduct = (product) => {
    dispatch(removeProduct(product));
  };

  const handleClearProducts = () => {
    dispatch(clearProducts()); // Dispatch the clearProducts action
  };

  return (
    <View>
      <Text>Product List</Text>
      <TouchableOpacity onPress={handleClearProducts}>
        <Text>Clear All Products</Text>
      </TouchableOpacity>
      <View>
        <TextInput
          className="bg-gray-200"
          style={{
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 5,
            height: 40,
            paddingLeft: 10,
            marginTop: 10,
          }}
          value={productname}
          onChangeText={(text) => setProductname(text)}
          placeholder="Email"
          placeholderTextColor="black"
        />
        <TouchableOpacity onPress={handleAddProduct}>
          <Text>Add Product </Text>
        </TouchableOpacity>
      </View>
      <View>
        {products.map((product) => (
          <View>
            <Text>{product.name}</Text>
            <TouchableOpacity onPress={() => handleRemoveProduct(product)}>
              <Text>Remove</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

export default Product;
