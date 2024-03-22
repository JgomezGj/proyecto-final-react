import { configureStore } from "@reduxjs/toolkit";
import carritoSlice from "../slices/carrito";

const store = configureStore({
    reducer: {
        carrito: carritoSlice.reducer
    },
});

export default store;