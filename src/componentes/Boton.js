import React from "react";
import '../css/Boton.css'

function Boton(props){

  const esOperador = (valor) => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  return(
    // usando javascript para añadir el nombre de la clase dinamicamente
    //usando el metodo trim eliminamos los espacios
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trim()}
      // definiendo una funcion anonima cuando ocurra un clic, de no hacerlo dara error, esto se hace cuando usamos una funcion como props y queremos ejecutarla
      onClick={() => props.manejarClic(props.children)}>
      {/* todo lo que este dentro de la etiqueta de este componente se podra usar con esta propiedad*/}
      {props.children}
    </div>
  );
};

export default Boton;