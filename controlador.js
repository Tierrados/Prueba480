document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario');
    const listaEstudiantes = document.getElementById('estudiantes');
    const promedio = document.getElementById('promedio-notas');
    const estudiantes = [];
//1.
    formulario.addEventListener('submit', (e) => {

        e.preventDefault();
        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const nota = parseFloat(document.getElementById('nota').value.trim());
        estudiantes.push({nombre, apellido, nota});
        actualizarLista();

        formulario.reset();
    });

//2.
    function actualizarLista() {

        listaEstudiantes.innerHTML = '';
        estudiantes.forEach((estudiante, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
        ${estudiante.nombre} ${estudiante.apellido} - Nota: ${estudiante.nota}
        <button onclick="eliminarEstudiante(${index})">Eliminar</button>
      `;
            listaEstudiantes.appendChild(li);
            actualizarPromedio();
        });
    }

//3.
    window.eliminarEstudiante = (index) => {

        estudiantes.splice(index, 1);
        actualizarLista();
    };

//4.
    function actualizarPromedio() {
        const total = estudiantes.reduce((sum, estudiante) => sum + estudiante.nota, 0);
        promedio.textContent = "Promedio:" + estudiantes.length ? (total / estudiantes.length).toFixed(2) : 0;

    }
});
