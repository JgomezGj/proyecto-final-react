import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import carritoSlice from "../slices/carrito";
import "./styles.css";

const {agregarProducto} = carritoSlice.actions;

const Productos = () => {
    const dispatch = useDispatch();
    const productosEnStore = useSelector(state => state.carrito.productos);
    const [productos, setProductos] = useState([]);

useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
        setProductos(data);
    });
}, []);

useEffect(() => {
    console.log("Productos en store", productosEnStore)
}, [productosEnStore]);

    return <div className="productos-container">
        <h1>Productos</h1>
        <ul className="lista-container">
            {productos.map(producto => {
                return (
                    <li key={producto.id} className="li-container">
                        <h1> {producto.title} </h1>
                        <p> {producto.description} </p>
                        <img src={producto.image} alt={producto.title} />
                        <button onClick={(evento) => dispatch(agregarProducto(producto))}>
                            Agregar al carrito </button>
                    </li>
                )
            })}
        </ul>
    </div>
}

export default Productos;