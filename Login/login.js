const url = 'http://127.0.0.1:3000/api/v1';

// const formulario = document.getElementById('miFormulario');

// formulario.addEventListener('submit', function(event) {
//   event.preventDefault(); // Evita recargar la página
  
//   const correo = document.getElementById('correo').value;
//   const contrasena = document.getElementById('contrasena').value;
  
//   // Simulación de autenticación (en un caso real se validaría con un servidor)
//   alert(`Inicio de sesión exitoso. Bienvenido, ${correo}.`);
// });



//Presentación de la clase:
//document.addEventListener('DOMContentLoaded', () ->
//{const form = document.getElementById('form')
//form.addEvenListener('submit', onlogin)})
//const onlogin = async (event) =>{
//  const email = document.getElementById('email-login').value
//  const password = document.getElementById('password-login').value
//  const body = {email: , password: } En user.controller.js en el backend podemos ver cómo lo está recibiendo
//  await fetch('http://127.0.0.1:3000/api/v1/user/login', {
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json'
//    },
//    body: JSON.stringify(body)
//  }).then(data = data.json()).then(data => {
//    console.log(Finalizando servicio de logindata) Desde la tabla user.controller está comparando si existe con un res.json(token)

//    En la Preview podemos ver qué existe en la base de datos; en la consola en Preview se vería el tokem:"fasfasf"
//  event.preventDefault()

const formulario = document.getElementById('miFormulario');
    
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página
});


const onSaveInfo = async () => {
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    const body = {
        email: correo,
        password: contrasena
    }
    try {
        const response = await fetch(`${url}/user`, {
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
}
