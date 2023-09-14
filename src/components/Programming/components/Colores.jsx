import {red, green, blue, yellow, orange} from '../programming'

export default function Colores() {
  return (
    <div className="js--items">
      <p>Selecciona un color para el lienzo</p>
      <div className='js--canvas-container'><div className="js--canvas"></div></div>
      <button onClick={red}>Rojo</button>
      <button onClick={green}>Verde</button>
      <button onClick={blue}>Azul</button>
      <button onClick={yellow}>Amarillo</button>
      <button onClick={orange}>Naranja</button>
    </div>
  )
}
