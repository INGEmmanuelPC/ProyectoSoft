const formulario = document.getElementById('miFormulario');
    
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página

    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    alert(`Inicio de sesión exitoso. Su correo es ${correo}.`);
});