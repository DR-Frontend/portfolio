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



/***  ***/