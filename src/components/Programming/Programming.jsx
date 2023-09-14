import Calificacion from './components/Calificacion'
import Colores from './components/Colores'
import Comprobacion from './components/Comprobacion'
import Operaciones from './components/Operaciones'
import './programming.css'

export default function Programming(){
  return(
    <section id="js" className="js">
      <div className="js--container">
        <h2>Scripts_</h2>
        <h4>Programación en Javascript</h4>

        <div className="js--wrapp">
          <details className="js--code">
            <summary>Operaciones aritméticas</summary>
            <Operaciones/>
          </details>

          <details className="js--code">
            <summary>Número mayor</summary>
            <Comprobacion/>    
          </details>

          <details className="js--code">
            <summary>Calificación</summary>
            <Calificacion/>
          </details>

          <details className="js--code">
            <summary>Colores</summary>
            <Colores/>
          </details>
        </div>

      </div>
    </section>
  )
}