import { cartActions } from '../Slices/CartSlice';
import axios from 'axios';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/cart/`,
        {headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${token}`,
        }}
      ).catch((err) => {
        console.log(err);
      });

      const data = await response.data.data;
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          data:cartData,
        })
      );
    } catch (error) {
        console.log(error);
    }
  };
};