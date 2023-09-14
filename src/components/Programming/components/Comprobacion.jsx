import {comprobar} from '../programming'

export default function Calificacion(){
  return(
    <div className="js--items">
      <p>Comparar 2 números y determinar cuál es mayor.</p>
      <input type="number" id="numero1" placeholder="Primer número"/>
      <input type="number" id="numero2" placeholder="Segundo número"/>
      <button onClick={comprobar}>Comprobar números</button>
      <p id="respuesta"></p>
    </div>
  )
}