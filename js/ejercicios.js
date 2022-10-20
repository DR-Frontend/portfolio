/* OPERACIONES ARITMETICAS */
const sumar = () =>{
   let   operadorA = Number(document.querySelector('#operadorA').value),
         operadorB = Number(document.querySelector('#operadorB').value),
         resultado = operadorA + operadorB
   
   document.querySelector('#operacion').innerHTML =`<span> + </span>`
   document.querySelector('#resultado').innerHTML = `<br><p>El resultado es: ${resultado} 🤓</p>`
}

const restar = () =>{
   let   operadorA = Number(document.querySelector('#operadorA').value),
         operadorB = Number(document.querySelector('#operadorB').value),
         resultado = operadorA - operadorB
   
   document.querySelector('#operacion').innerHTML =`<span> - </span>`
   document.querySelector('#resultado').innerHTML = `<br><p>El resultado es: ${resultado} 🤓</p>`
}

const multiplicar = () =>{
   let   operadorA = Number(document.querySelector('#operadorA').value),
         operadorB = Number(document.querySelector('#operadorB').value),
         resultado = operadorA * operadorB
   
   document.querySelector('#operacion').innerHTML =`<span> x </span>`
   document.querySelector('#resultado').innerHTML = `<br><p>El resultado es: ${resultado} 🤓</p>`
}

const dividir = () =>{
   let   operadorA = Number(document.querySelector('#operadorA').value),
         operadorB = Number(document.querySelector('#operadorB').value),
         resultado = operadorA / operadorB
         res= resultado.toFixed(2)

   document.querySelector('#operacion').innerHTML =`<span> / </span>`
   document.querySelector('#resultado').innerHTML = `<br><p>El resultado es: ${res} 🤓</p>`
}


/*** COMPARADOR DE NUMEROS ***/
const comprobar = () => {
   let   numero1 = Number(document.querySelector('#numero1').value),
         numero2 = Number(document.querySelector('#numero2').value)
   
   if (numero1 > numero2){
      document.querySelector('#respuesta').innerHTML = `<br><p>${numero1} es mayor que ${numero2} 😯</p>`
   } else if(numero1 < numero2){
      document.querySelector('#respuesta').innerHTML = `<br><p>${numero2} es mayor que ${numero1} 😯</p>`
   } else{
      document.querySelector('#respuesta').innerHTML = `<br><p>Ambos números son iguales 😯</p>`
   }
}



/*** CALIFICACION ***/
const calificar = () => {
   let valor = Number(document.querySelector('#valor').value)

   if(valor < 0 || valor > 10){
      document.querySelector('#calificacion').innerHTML = `<br><p>El valor debe ser entre 0 y 10</p>`
   }else if(valor == 0) {
      document.querySelector('#calificacion').innerHTML = `<br><p>Desempeño Deficiente 😣</p>`
   }else if(valor <= 5){
      document.querySelector('#calificacion').innerHTML = `<br><p>Desempeño Insuficiente 🙁</p>`
   }else if(valor <= 6){
      document.querySelector('#calificacion').innerHTML = `<br><p>Desempeño Bajo 😐</p>`
   }else if(valor <= 7){
      document.querySelector('#calificacion').innerHTML = `<br><p>Desempeño Regular 🙂</p>`
   }else if(valor <= 8){
      document.querySelector('#calificacion').innerHTML = `<br><p>Desempeño Suficiente 😃</p>`
   }else if(valor <= 9){
      document.querySelector('#calificacion').innerHTML = `<br><p>Desempeño Excelente 😁</p>`
   }else if(valor == 10){
      document.querySelector('#calificacion').innerHTML = `<br><p>Desempeño Sobresaliente 😎</p>`
   }
}



/*** COLORES ***/
const red = () => {
   let   lienzo = document.querySelector('#lienzo')
   lienzo.style.backgroundColor = "red"
}
const green = () => {
   let   lienzo = document.querySelector('#lienzo')
   lienzo.style.backgroundColor = "green"
}
const blue = () => {
   let   lienzo = document.querySelector('#lienzo')
   lienzo.style.backgroundColor = "blue"
}
const yellow = () => {
   let   lienzo = document.querySelector('#lienzo')
   lienzo.style.backgroundColor = "yellow"
}
const purple = () => {
   let   lienzo = document.querySelector('#lienzo')
   lienzo.style.backgroundColor = "purple"
}



/*** FAKE TWITTER ***/
const post = () => {
   let   msj = document.querySelector('#msj').value,
         warning = document.querySelector('.warning')
   
   if(msj != ""){
      let   newCard = document.querySelector('.js__twitter'),
            newField = document.createElement('fieldset'),
            newLegend = document.createElement('legend'),
            newMsj = document.createElement('p')
            
            newField.appendChild(newLegend)
            newField.classList.add('view')
            newLegend.textContent = 'Usuario escribió'
            newField.appendChild(newMsj)
            newMsj.textContent = msj
            newCard.insertAdjacentElement("afterend", newField)

            document.querySelector('#msj').value = ""
            warning.textContent = ""
   } else{
      warning.innerHTML = `<br><p>No puedes postear mensajes vacíos</p>`
   }
}