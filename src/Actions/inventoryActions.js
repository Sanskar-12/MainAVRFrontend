import axios from "axios";
import { server } from "../store";

export const getAllInventoryAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllInventoryRequest",
    });

    const options = {
      withCredentials: true,
    };

    const { data } = await axios.get(`${server}/get/all/product`,options);

    dispatch({
      type: "getAllInventorySuccess",
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: "getAllinventoryFail",
      payload: error.response.data.message,
    });
  }
};
