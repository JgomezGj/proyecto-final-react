import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Contacto from "../../vistas/Contacto";
import CarritoComponente from "./CarritoComponente";
import "./styles.css";

const Layout = (props) => {
  const [showContent, setShowContent] = useState(false);
  const [showContacto, setShowContacto] = useState(false);
  const [showCarrito, setShowCarrito] = useState(false);
  const [showBienvenida, setShowBienvenida] = useState(true);

  const toggleContent = () => {
    setShowContent(!showContent);
    setShowContacto(false);
    setShowBienvenida(false);
    setShowCarrito(false);
  };

  const handleContactoClick = () => {
    setShowContent(false);
    setShowContacto(!showContacto);
    setShowBienvenida(false);
    setShowCarrito(false);
  };

  const handleInicioClick = () => {
    setShowContent(false);
    setShowContacto(false);
    setShowBienvenida(true);
    setShowCarrito(false);
  };

  const handleCarritoClick = () => {
    setShowContent(false);
    setShowContacto(false);
    setShowBienvenida(false);
    setShowCarrito(!showCarrito);
  };

  return (
    
    <div className="layout-container">
      <h3 className="nombre">Tienda Colombiana</h3>
      {showBienvenida && (
        <h1 className="mensaje">
          ¡Bienvenido a nuestra tienda online! Descubre una variedad de productos
          que se adaptan a tu estilo de vida. ¡Explora y encuentra tus favoritos hoy mismo!
        </h1>
      )}
      <h2 className="carrito">
        <button className="button-carritos" onClick={handleCarritoClick}>
        <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </h2>
      <h2 className="inicio-contacto">
        <button onClick={handleInicioClick} className="button-inicio">Inicio</button>
        <button onClick={handleContactoClick} className="button-contacto">Contacto</button>
      </h2>
      <div className="productos-container">
        <h2>
          {/* Mostrar el componente de carrito si showCarrito es true */}
          {showCarrito && <CarritoComponente/>}
          {/* Mostrar el componente de contacto si showContacto es true */}
          {showContacto && <Contacto />}
          <button onClick={toggleContent} className="button-productos">Productos</button>
          {/* Mostrar el contenido de productos si showContent es true */}
          {showContent && <div>{props.children}</div>}
        </h2>
      </div>

      <div className="footer">
        <h3>Compra online - </h3>
        <h3>Múltiples métodos de pago - </h3>
        <h3>Compra Segura - </h3>
        <h3>Tienda 100% Colombiana</h3>
      </div>
    </div>
  );
};

export default Layout;
