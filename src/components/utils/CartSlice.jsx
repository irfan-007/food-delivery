import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    cartAdd: (state, action) => {
      let tem = state.find((el) => el.id == action.payload.id);
      if (!tem) state.push(action.payload);
      else tem.quantity++;
    },
    cartRemove: (state, action) => {
      // console.log("hii", action);

      let tem = state.find((el) => el.id == action.payload.id);

      if (tem.quantity > 1) tem.quantity--;
      else {
        let st = state.filter((k) => k.id != tem.id);
        console.log(st);
      }
    },
  },
});

export default cartSlice.reducer;
export const { cartAdd, cartRemove } = cartSlice.actions;
