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
        },

        pagar: (state) => {
            console.log("Pagando...")
        },

        reiniciarCarrito: (state) => {
            state.productos = [];
            state.total = 0;
        }
    },
});

export const {agregarProducto, reiniciarCarrito, pagar} = carritoSlice.actions;
export default carritoSlice;