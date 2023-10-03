import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: { items: [] },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    removeProduct: (state, action) => {
      // Find the index of the product to remove by its ID
      const productIndexToRemove = state.items.findIndex(
        (product) => product.id === action.payload.id
      );

      if (productIndexToRemove !== -1) {
        state.items.splice(productIndexToRemove, 1);
      }
    },
    updateProductQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const productToUpdate = state.items.find((product) => product.id === id);

      if (productToUpdate) {
        productToUpdate.quantity = quantity;
      }
    },
    clearProducts: (state) => {
      state.items = []; // Clear the products array
    },
  },
});

export const {
  addProduct,
  removeProduct,
  clearProducts,
  updateProductQuantity,
} = productSlice.actions;
export default productSlice.reducer;
