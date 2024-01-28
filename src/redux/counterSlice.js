import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        inc: (state) => {
            return {...state, value: state.value + 1}
        },
        dec: (state) => {
            return {...state, value: state.value - 1}
        },
        set: (state, action) => {
            console.log(typeof(action.payload));
            return {...state, value: action.payload}
        }
    }
})

export const { inc, dec, set } = counterSlice.actions;
export default counterSlice.reducer;