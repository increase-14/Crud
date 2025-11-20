import { configureStore } from "@reduxjs/toolkit";
import crudSlice from "./crudSlice"; 
import todoSlice from "./todoSlice";  

const store = configureStore({
  reducer: {
    crud: crudSlice,  
    todo: todoSlice,  
  },
});

export default store;