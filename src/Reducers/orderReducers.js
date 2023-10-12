import { createReducer } from "@reduxjs/toolkit";

const intialState = { orders: [] };

export const getAllOrders = createReducer(intialState, {
  getAllOrdersRequest: (state) => {
    state.loading = true;
  },
  getAllOrdersSuccess: (state, action) => {
    state.loading = false;
    state.orders = action.payload;
  },
  getAllOrdersFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});
