import { createSlice } from '@reduxjs/toolkit'

const initalState = {
    value : 0
}
const CounterSlice = createSlice({
    name :"counter",
    initialState: initalState,
    reducers : {
        increment : (state) => {
            state.value = state.value +1;
        },
        decrement : (state) => {
            if(state.value > 0){
                state.value = state.value -1;
            }
        },
        incrementByValue : (state, action) => {
            state.value = state.value + action.payload;
        },
        decrementByValue : (state, action) => {
            if(state.value - action.payload >= 0){
                state.value = state.value- action.payload
            }
        }
    }
})

export const {increment, decrement,incrementByValue,decrementByValue} = CounterSlice.actions;
export default CounterSlice.reducer;