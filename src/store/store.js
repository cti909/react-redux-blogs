import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/RootReducers";

console.log("store");
const store = configureStore({
  reducer: rootReducer,
});
export default store;
