import { createReducer } from "@reduxjs/toolkit";

let initialValue = {
  cartItems: [],
  subTotal: 0,
  shipping: 0,
  tax: 0,
  total: 0,
};

const cartReducer = createReducer(initialValue, {
  addToCart: (state, action) => {
    const item = action.payload;
    const isItemExist = state.cartItems.find((i) => i.id === item.id);

    if (!isItemExist) state.cartItems.push(item);
    else {
      state.cartItems.forEach((i) => {
        if (i.id === item.id) i.quantity += 1;
      });
    }
  },

  subtractQuantity: (state, action) => {
    const item = state.cartItems.find((i) => i.id === action.payload.id);
    item.quantity -= 1;
    if (item.quantity === 0) {
      state.cartItems = state.cartItems.filter(
        (i) => i.id !== action.payload.id
      );
    }

    // const item = action.payload;
    // state.cartItems.forEach((i) => {
    //   if (item.id === i.id) {
    //     i.quantity -= 1;
    //     if (i.quantity === 0) {
    //       const indexOfItem = state.cartItems.indexOf(item.id);
    //       state.cartItems.splice(indexOfItem, 1);
    //     }
    //   }
    // });
  },

  removeToCart: (state, action) => {
    state.cartItems = state.cartItems.filter((i) => i.id !== action.payload.id);

    // const item = action.payload;
    // const indexOfItem = state.cartItems.indexOf(item.id);
    // state.cartItems.splice(indexOfItem, 1);
  },

  calculatePrice: (state) => {
    let sum = 0;
    state.cartItems.forEach((i) => (sum += i.price * i.quantity));
    state.subTotal = sum;
    state.shipping =
      state.subTotal > 1000 || state.cartItems.length === 0 ? 0 : 200;
    state.tax = +(state.subTotal * 0.18).toFixed();
    state.total = state.subTotal + state.shipping + state.tax;
  },
});

export default cartReducer;
