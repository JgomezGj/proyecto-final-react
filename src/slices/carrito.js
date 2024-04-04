import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productos: [],
    total: 0
};

const carritoSlice = createSlice({
    name: "carrito",
    initialState,
    reducers: {
        agregarProducto: (state, action) => {
            const producto = action.payload;
            state.productos.push(producto);
            state.total += producto.price;
        }
    },

    reiniciarCarrito: (state) => {
        state.productos = [];
        state.total = 0;
    }
});

export const {agregarProducto, reiniciarCarrito} = carritoSlice.actions;
export default carritoSlice;