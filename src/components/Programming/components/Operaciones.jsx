import {sumar, restar, multiplicar, dividir} from '../programming'

export default function Operaciones(){
  return(
    <div className="js--items js--operaciones">
      <p>Suma, resta, multiplicación o división de 2 números.</p>
      <input type="number" id="operadorA" placeholder="Número 1"/>
      <input type="number" id="operadorB" placeholder="Número 2"/>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={multiplicar}>Multiplicar</button>
      <button onClick={dividir}>Dividir</button>
      <p id="resultado"></p>
    </div>
  )
}