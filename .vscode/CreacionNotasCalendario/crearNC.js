document.getElementById('guardarNota').addEventListener('click', function() {
    const nombreNota = document.getElementById('nombreNota').value;
    const notaTexto = document.getElementById('notaTexto').value;
    const fechaRecordatorio = document.getElementById('fechaRecordatorio').value;

    if (nombreNota.trim() !== '' && notaTexto.trim() !== '' && fechaRecordatorio !== '') {
        // Aquí puedes implementar la lógica para guardar la nota con el recordatorio y el nombre
        alert('Nota guardada con recordatorio para: ' + fechaRecordatorio + '\nNombre: ' + nombreNota + '\nNota: ' + notaTexto); // Ejemplo: muestra un mensaje
        document.getElementById('nombreNota').value = ''; // Limpia el nombre
        document.getElementById('notaTexto').value = ''; // Limpia el textarea
        document.getElementById('fechaRecordatorio').value = ''; // Limpia el input de fecha
    } else {
        alert('Por favor, ingresa el nombre de la nota, escribe la nota y selecciona la fecha de recordatorio.');
    }
});