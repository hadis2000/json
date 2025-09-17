export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return { cart: state.cart.filter((c) => c._id !== action.payload._id) };
    default:
      return state;
  }
};
