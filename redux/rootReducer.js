import { combineReducers } from "redux";
import counterReducer from "./reducers/counterSlice";
import productReducer from "./reducers/productSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  product: productReducer,
});

export default rootReducer;
