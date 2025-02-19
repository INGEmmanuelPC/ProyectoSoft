const formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página

    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;

    alert(`Registro exitoso ${nombre}, su correo es ${correo}, y su teléfono es ${telefono}.`);
});