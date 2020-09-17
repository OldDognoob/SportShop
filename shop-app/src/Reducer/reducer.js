// Create one reducer function per slice of state

import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
  TOGGLE_AMOUNT,
} from "../State/actions";
import cartItems from "../cart-items";

const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};
