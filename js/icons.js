(()=>{
  const
    d = document,
    $icon = d.getElementById('icons__list'),
    $fragment = d.createDocumentFragment()

    async function getData(){
      try {
        let
          res = await fetch('../js/json/icons.json'),
          json = await res.json()

          if(!res.ok) throw {status: res.status, statusText: res.statusText}

          json.forEach(el => {
            let $li = d.createElement('li')

            $li.classList.add('icons__list-item')
            $li.innerHTML = `<i class="icon-${el.name}"></i>`
            $fragment.appendChild($li)
          });

          $icon.appendChild($fragment)

      } catch (error) {
        let $msj = error.status || 'Error en petición Ajax'
        $icon.innerHTML = `<p>${$msj}</p>`
      }
    }
    getData()
})()