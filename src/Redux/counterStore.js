import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { useEffect } from "react";
import counterSlices from "./counterSlices";




export const counterStore = configureStore({
  reducer: {
    counter: counterSlices,
  },
});
