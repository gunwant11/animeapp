import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react/cjs/react.production.min";
const store = configureStore({
    reducer:{ user: useReducer}
})

export default store;