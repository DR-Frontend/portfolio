/* OPERACIONES ARITMÉTICAS */
export const sumar = (val1 = 0, val2 = 0, res) => {
  val1 = Number(document.querySelector('#operadorA').value)
  val2 = Number(document.querySelector('#operadorB').value)
  res = val1 + val2
  
  return document.querySelector('#resultado').innerHTML = `El resultado es: ${res} 🤓`
}
export const restar = (val1 = 0, val2 = 0, res) => {
  val1 = Number(document.querySelector('#operadorA').value)
  val2 = Number(document.querySelector('#operadorB').value)
  res = val1 - val2
  
  return document.querySelector('#resultado').innerHTML = `El resultado es: ${res} 🤓`
}
export const multiplicar = (val1 = 0, val2 = 0, res) => {
  val1 = Number(document.querySelector('#operadorA').value)
  val2 = Number(document.querySelector('#operadorB').value)
  res = val1 * val2
  
  return document.querySelector('#resultado').innerHTML = `El resultado es: ${res} 🤓`
}
export const dividir = (val1 = 0, val2 = 0, resultado, res) => {
  val1 = Number(document.querySelector('#operadorA').value)
  val2 = Number(document.querySelector('#operadorB').value)
  resultado = val1 / val2
  res = resultado.toFixed(2)
  
  return document.querySelector('#resultado').innerHTML = `El resultado es: ${res} 🤓`
}



/* COMPARAR DE NUMEROS */
export const comprobar = () => {
  let   numero1 = Number(document.querySelector('#numero1').value),
        numero2 = Number(document.querySelector('#numero2').value)
  
  if (numero1 > numero2){
     document.querySelector('#respuesta').innerHTML = `${numero1} es mayor que ${numero2} 😯`
  } else if(numero1 < numero2){
     document.querySelector('#respuesta').innerHTML = `${numero2} es mayor que ${numero1} 😯`
  } else{
     document.querySelector('#respuesta').innerHTML = `Ambos números son iguales 😯`
  }
}



/* CALIFICACIÓN */
export const calificar = () => {
  let valor = Number(document.querySelector('#valor').value)

  if(valor < 0 || valor > 10){
     document.querySelector('#calificacion').innerHTML = `<br/>El valor debe ser entre 0 y 10 🚫`
  }else if(valor == 0) {
     document.querySelector('#calificacion').innerHTML = `Desempeño Deficiente 😣`
  }else if(valor <= 5){
     document.querySelector('#calificacion').innerHTML = `Desempeño Insuficiente 🙁`
  }else if(valor <= 6){
     document.querySelector('#calificacion').innerHTML = `Desempeño Bajo 😐`
  }else if(valor <= 7){
     document.querySelector('#calificacion').innerHTML = `Desempeño Regular 🙂`
  }else if(valor <= 8){
     document.querySelector('#calificacion').innerHTML = `Desempeño Suficiente 😃`
  }else if(valor <= 9){
     document.querySelector('#calificacion').innerHTML = `Desempeño Excelente 😁`
  }else if(valor == 10){
     document.querySelector('#calificacion').innerHTML = `Desempeño Sobresaliente 😎`
  }
}



/* COLORES */
export const red = () => {
  let color = document.querySelector('.js--canvas')
  color.style.backgroundColor = "red"
}
export const green = () => {
  let color = document.querySelector('.js--canvas')
  color.style.backgroundColor = "green"
}
export const blue = () => {
  let color = document.querySelector('.js--canvas')
  color.style.backgroundColor = "blue"
}
export const yellow = () => {
  let color = document.querySelector('.js--canvas')
  color.style.backgroundColor = "yellow"
}
export const orange = () => {
  let color = document.querySelector('.js--canvas')
  color.style.backgroundColor = "orange"
}