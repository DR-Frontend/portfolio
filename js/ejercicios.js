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



/*** POSTS ***/
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



/*** POKE-FAKE-MON ++*/
let   HP_m1 = 5,
      HP_m2 = 5,
      random = 0,
      m1 = document.querySelector('.m1_render'),
      m2 = document.querySelector('.m2_render'),
      HP1 = document.querySelector('.m1_hp_value'),
      HP2 = document.querySelector('.m2_hp_value'),
      text = document.querySelector('.panelText'),
      text2 = document.querySelector('.panelText2'),
      btn = document.querySelector('.btn-atk'),
      btn2 = document.querySelector('.btn-atk2')


   const attack = () => {
      btn.classList.add('disabled')
      btn2.classList.remove('disabled')
      text.textContent = `Taco-mon a atacado ⚔️`
      
      const hit = (max) =>{
         m1.classList.add('atk')
         m2.classList.remove('atk2')
         random = Math.floor(Math.random() * max);

         if(random == 1){
            --HP_m2
            text2.textContent = `Chile-mon fue herido 💔`
            btn.textContent = `Taco-mon`
            btn2.textContent = `Turno de Chile-mon`
         }
         else if(random == 0){
            text2.textContent = `Chile-mon bloqueó tu ataque 🛡`
            btn.textContent = `Taco-mon`
            btn2.textContent = `Turno de Chile-mon`
         }
      }
      hit(2)

      if(HP_m2 == 0){
         m2.classList.add('fade')
         text.textContent = `Chile-mon fue abatido 😵`
         text2.textContent = `Taco-mon gana la pelea 😎`
         btn.style.display = 'none'
         btn2.style.display = 'none'
      }

      HP1.textContent = `${HP_m1}`
      HP2.textContent = `${HP_m2}`
   }

   const attack2 = () => {
      btn2.classList.add('disabled')
      btn.classList.remove('disabled')
      text.textContent = `Chile-mon a atacado ⚔️`
      
      const hit2 = (max) =>{
         m2.classList.add('atk2')
         m1.classList.remove('atk')
         random = Math.floor(Math.random() * max);

         if(random == 1){
            --HP_m1
            text2.textContent = `Taco-mon fue herido 💔`
            btn2.textContent = `Chile-mon`
            btn.textContent = `Turno de Taco-mon`
         }
         else if(random == 0){
            text2.textContent = `Taco-mon bloqueó el ataque 🛡`
            btn2.textContent = `Chile-mon`
            btn.textContent = `Turno de Taco-mon`
         }
      }
      hit2(2)

      if(HP_m1 == 0){
         m1.classList.add('fade')
         text.textContent = `Taco-mon fue abatido 😵`
         text2.textContent = `Chile-mon gana la pelea 😎`
         btn.style.display = 'none'
         btn2.style.display = 'none'
      }

      HP1.textContent = `${HP_m1}`
      HP2.textContent = `${HP_m2}`
   }

   HP1.textContent = `${HP_m1}`
   HP2.textContent = `${HP_m2}`