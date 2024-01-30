import { configureStore } from "@reduxjs/toolkit";
import  counterReducer from './counterSlice';
import  inputReducer from './inputSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        input: inputReducer
    }
})