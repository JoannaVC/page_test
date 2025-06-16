document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('todoForm')
    const input = document.getElementById('tarea')
    const lista = document.getElementById('listaTareas')

    const completedContainer = document.getElementById('completedContainer')
    const TareasCompletadas = document.getElementById('TareasCompletadas')

    completedContainer.addEventListener("mouseenter", () => {
        TareasCompletadas.classList.remove("hidden");
    });
    completedContainer.addEventListener("mouseleave", () => {
        TareasCompletadas.classList.add("hidden");
    });


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

        const botonCheck = document.createElement('button');
        botonCheck.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
        `

        botonCheck.className = 'text-gray-300 hover:text-green-700';

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'flex items-center gap-2 hidden';
        buttonContainer.appendChild(botonCheck);
        buttonContainer.appendChild(boton);

        li.addEventListener('mouseover', () => {
            buttonContainer.classList.remove('hidden'); // mostrar
        });

        li.addEventListener('mouseout', () => {
            buttonContainer.classList.add('hidden'); // ocultar
        });

        botonCheck.addEventListener('click', () => {
        lista.removeChild(li);
        TareasCompletadas.appendChild(li);
        li.removeChild(buttonContainer)
        li.className = 'text-[18px] text-[#244520]';
        });

        li.appendChild(texto)
        li.appendChild(buttonContainer)
        lista.appendChild(li)

        input.value = ''


    })

} )
