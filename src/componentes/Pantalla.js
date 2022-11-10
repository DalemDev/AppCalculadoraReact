import React from "react";
import '../css/Pantalla.css'

//otra forma de crear un componente (mediante una funcion flecha)
//usada en componentes sencillos (aquellos que no tienen logica, solo tienen presentacion)
//en lugar de usar las llaves para abrir el cuerpo de la funcion usamos parentesis para indicar que retornaremos algo  
const Pantalla = ({ input }) => (
  <div className="input">
    {input}
  </div>
);

export default Pantalla;