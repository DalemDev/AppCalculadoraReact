import React from "react";
import '../css/BotonClear.css'

const BotonClear = (props) => (
  // ejecutando la funcion con el onclick
  <div className="boton-clear" onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default BotonClear;