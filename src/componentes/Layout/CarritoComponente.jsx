import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { agregarProducto, reiniciarCarrito } from "../../slices/carrito";

const carritoComponente = () => {
    const productosEnCarrito = useSelector((state) => state.carrito.productos);
    const totalCarrito = useSelector((state) => state.carrito.total);
    const dispatch = useDispatch();

    const agregarProductoAlCarrito = (producto) => {
        dispatch(agregarProducto(producto));
    };

    const reiniciarCarritoHandler = () => {
        dispatch(reiniciarCarrito());
    };

    return (
        <div>
            <h2>Carrito</h2>
            <ul>
                {productosEnCarrito.map((producto, index) => (
                    <li key={index}> {producto.name} - {producto.price} </li>
                ))}
            </ul>
            <p>Total: ${totalCarrito}</p>
            <button onClick={reiniciarCarritoHandler}>Vaciar carrito</button>
        </div>
    );
};

export default carritoComponente;