//Design the type of action the state may suffer
// Item cart
export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const REMOVE = "REMOVE";
// Clear
export const CLEAR_CART = "CLEAR_CART";
export const GET_TOTALS = "GET_TOTALS";
export const TOGGLE_AMOUNT = "TOGGLE-AMOUNT";

export const removeItem = (id) => {
  return { type: REMOVE, payload: { id } };
};
