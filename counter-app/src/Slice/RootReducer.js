import { combineReducers } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";



const RootReducer = combineReducers({
    counter : CounterSlice
})
export default RootReducer