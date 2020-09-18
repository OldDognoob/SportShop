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
function reducer(state = initialStore, action) {
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === DECREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = {
          ...cartItem,
          amount: cartItem.amount - 1,
        };
      }
      return cartItem;
    });
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === INCREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = {
          ...cartItem,
          amount: cartItem.amount + 1,
        };
      }
      return cartItem;
    });
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
  }
}
