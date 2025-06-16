document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('todoForm')
    const input = document.getElementById('tarea')
    const lista = document.getElementById('listaTareas')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        if (input.value.trim() === '') return
        //trim es para quitar espacios en blanco
        
        const li = document.createElement('li')
        li.className = 'text-[22px] text-[#244520]  list-group-item flex items-center justify-between align-items-center bg-white rounded-full h-12 px-6'

        const texto = document.createElement('span')
        texto.textContent = input.value

        const boton = document.createElement('button')
        boton.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>
`

        boton.className = 'text-gray-300 hover:text-red-700'

        boton.addEventListener('click', () => {
            lista.removeChild(li)
        })

        li.appendChild(texto)
        li.appendChild(boton)
        lista.appendChild(li)

        input.value = ''


    })

} )