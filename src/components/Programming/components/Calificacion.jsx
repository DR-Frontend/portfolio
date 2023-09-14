import {calificar} from '../programming'

export default function Calificacion(){
  return(
    <div className="js--items js--calificar">
      <p>En un rango de 0 a 10 escribe una calificación para mostrar el desempeño.</p>
      <input type="number" id="valor" placeholder="Calificación"/>
      <button onClick={calificar}>Calificar</button>
      <p id="calificacion"></p>
    </div>
  )
}