// const formulario = document.getElementById('miFormulario');

// formulario.addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página

//     const correo = document.getElementById('correo').value;
//     const contrasena = document.getElementById('contrasena').value;
//     const nombre = document.getElementById('nombre').value;
//     const telefono = document.getElementById('telefono').value;

//     alert(`Registro exitoso ${nombre}, su correo es ${correo}, y su teléfono es ${telefono}.`);
// });

const formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página (evita un refresh)

    onSaveInfo();
});

const url = 'http://127.0.0.1:3000/api/v1';

const onSaveInfo = async () => {
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    const nombre = document.getElementById('nombre').value;
    const usuario = document.getElementById('usuario').value;

    const body = {
        email: correo,
        password: contrasena,
        name: nombre,
        user: usuario
    }
    
    // console.log('info body', body);  Esta línea muestra el contenido de body en la consola
    
    try {
        const response = await fetch(`${url}/user/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Respuesta del servidor:', data);
    } catch (error) {
        console.error('Error:', error);
    }

    //El formulario será el consumo de la función y hará el refresh; siempre se hará con formularios

    //Antes de correr la API recomendable hacer un clear en la terminal.

}