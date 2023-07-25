import { cartActions } from '../Slices/CartSlice';
import axios from 'axios';

export const fetchCartData = () => {
  return async (dispatch) => {
    console.log("Before fetchData");
    const fetchData = async () => {
        console.log("Inside fetchData");
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/cart/`,
        {token:token}
      ).catch((err) => {
        console.log(err);
      });
      console.log(response);

      const data =response.data.cart;
      console.log(data);
      return data;
    };

    try {
        console.log("Before cartData");
      const cartData = await fetchData();
      console.log("After cartData");
      console.log(cartData);
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