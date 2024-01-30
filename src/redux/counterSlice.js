import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        incValue: (state) => {
            return {...state, value: state.value + 1}
        },
        decValue: (state) => {
            return {...state, value: state.value - 1}
        },
        setValue: (state, action) => {
            return {...state, value: action.payload}
        }
    }
})

export const { incValue, decValue, setValue } = counterSlice.actions;
export default counterSlice.reducer;