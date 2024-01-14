import { configureStore } from "@reduxjs/toolkit";
//import CounterSlice from "../Slice/CounterSlice";
import RootReducer from "../Slice/RootReducer";



export const rootStore  = configureStore({
    reducer : RootReducer
})