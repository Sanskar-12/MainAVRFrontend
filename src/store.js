import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Reducers/userReducers";
import { getAllInventory } from "./Reducers/inventoryReducers";
import { getAllOrders } from "./Reducers/orderReducers";

export const server="https://mainavrbackend.onrender.com/api/v1"

const store = configureStore({
  reducer: {
    user: userReducer,
    inventory: getAllInventory,
    orders: getAllOrders,
  },
});

export default store;

