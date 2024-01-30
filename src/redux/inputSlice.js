import { createSlice } from "@reduxjs/toolkit";
const inputSlice = createSlice({
    name: 'input',
    initialState: {
        value: '',
    },
    reducers: {
        setInput: (state, action) => {
            return {...state, value: action.payload}
        }
    }
})

export const { setInput } = inputSlice.actions;
export default inputSlice.reducer;