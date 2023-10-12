import axios from "axios";
import { server } from "../store";

export const getAllOrdersAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllOrdersRequest",
    });

    const options = {
      withCredentials: true,
    };

    const { data } = await axios.get(`${server}/order/get-order`,options);
    // console.log(data);

    dispatch({
      type: "getAllOrdersSuccess",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "getAllOrdersFail",
      payload: error.response.data.message,
    });
  }
};
