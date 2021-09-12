import { createSlice } from "@reduxjs/toolkit";
let store = JSON.parse(localStorage.getItem("store")) ?? {}
export const counterSlice = createSlice({
    name: "counter",
    initialState: store.counter || { count: 0 }
    ,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        }

    }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
