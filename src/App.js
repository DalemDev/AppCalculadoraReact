import './App.css';
//import logo from './images/programacion.jpg';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
// importando la libreria, para esto debemos instalar la libreria con el comando npm install  nombreLibreria 
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  // definiendo funcion
  const agregarInput = valor => {
    setInput(input + valor);
  };

  // calculando el resultado
  // el metodo evaluate lo conseguimos en el paquete mathjs
  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input));
    }else{
      alert('Ingrese datos para realizar una operacion');
    }
  };

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Pantalla input={input}/>
        <div className="fila">
          {/* usando etiqueta de apertura y cierre en creacion de componente para usar el props children */}
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">          
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">          
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          {/* definiendo funcion de forma anonima */}
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
