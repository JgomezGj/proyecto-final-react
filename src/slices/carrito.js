import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productos: []
};

const carritoSlice = createSlice({
    name: "carrito",
    initialState,
    reducers: {
        agregarProducto: (state, action) => {
            const producto = action.payload;
            state.productos.push(producto);
        }
    },
});

export default carritoSlice;