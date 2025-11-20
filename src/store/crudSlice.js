import { createSlice } from "@reduxjs/toolkit";

const crudSlice = createSlice({
  name: "crud",
  initialState: {
    data: [
      { id: 1, name: "Хлеб", price: 45 },
      { id: 2, name: "Молоко", price: 78 },
      { id: 3, name: "Яйца", price: 95 },
    ],
  },
  reducers: {
    add(state, action) {
      state.data.push(action.payload);
    },
    update(state, action) {
      const item = state.data.find((el) => el.id === action.payload.id);
      if (item) {
        item.name = action.payload.name;
        item.price = action.payload.price;
      }
    },
    remove(state, action) {
      state.data = state.data.filter((el) => el.id !== action.payload);
    },
  },
});

export const { add, update, remove } = crudSlice.actions;
export default crudSlice.reducer;
