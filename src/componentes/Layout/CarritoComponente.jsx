import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { agregarProducto, pagar, reiniciarCarrito } from "../../slices/carrito";

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

    const pagarCarritoHandler = () => {
        dispatch(pagar());
    };

    return (
        <div className="carrito-container">
            <h3>Carrito</h3>
            <ul>
                {productosEnCarrito.map((producto, index) => (
                    <li key={index}> {producto.title} - {producto.price} </li>
                ))}
            </ul>
            <p>Total: ${totalCarrito}</p>
            <button className="pagar-carrito" onClick={pagarCarritoHandler}>Pagar</button>
            <button className="vaciar-carrito" onClick={reiniciarCarritoHandler}>Vaciar carrito</button>
        </div>
    );
};

export default carritoComponente;