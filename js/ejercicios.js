/* OPERACIONES ARITMETICAS */
const sumar = () =>{
   let   operadorA = Number(document.querySelector('#operadorA').value),
         operadorB = Number(document.querySelector('#operadorB').value),
         resultado = operadorA + operadorB
   
   document.querySelector('#operacion').innerHTML =`<span> + </span>`
   document.querySelector('#resultado').innerHTML = `<br><p>El resultado es: ${resultado}</p>`
}

const restar = () =>{
   let   operadorA = Number(document.querySelector('#operadorA').value),
         operadorB = Number(document.querySelector('#operadorB').value),
         resultado = operadorA - operadorB
   
   document.querySelector('#operacion').innerHTML =`<span> - </span>`
   document.querySelector('#resultado').innerHTML = `<br><p>El resultado es: ${resultado}</p>`
}

const multiplicar = () =>{
   let   operadorA = Number(document.querySelector('#operadorA').value),
         operadorB = Number(document.querySelector('#operadorB').value),
         resultado = operadorA * operadorB
   
   document.querySelector('#operacion').innerHTML =`<span> x </span>`
   document.querySelector('#resultado').innerHTML = `<br><p>El resultado es: ${resultado}</p>`
}

const dividir = () =>{
   let   operadorA = Number(document.querySelector('#operadorA').value),
         operadorB = Number(document.querySelector('#operadorB').value),
         resultado = operadorA / operadorB
         res= resultado.toFixed(2)

   document.querySelector('#operacion').innerHTML =`<span> / </span>`
   document.querySelector('#resultado').innerHTML = `<br><p>El resultado es: ${res}</p>`
}


/*** FAKE TWITTER ***/
