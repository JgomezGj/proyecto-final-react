import { useState } from "react";
import "./styles.css";

const Productos = () => {
    const productos = useState([]);

    return <div className="productos-container">
        <h1>Productos</h1>
        <ul>
            <li>Producto1</li>
            <li>Producto2</li>
        </ul>
    </div>
}

export default Productos;