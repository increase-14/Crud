import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import crudSlice from "./crudSlice";
import adminSlice from "./adminSlice";  

const store = configureStore({
  reducer: {
    todo: todoSlice,
    crud: crudSlice,
    auth: adminSlice, 
  },
});

export default store;