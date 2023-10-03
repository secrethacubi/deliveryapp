import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import productReducer from "./reducers/productSlice";
import userReducer from "./reducers/userSlice";
// import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    user: userReducer,
  },
});

export default store;
