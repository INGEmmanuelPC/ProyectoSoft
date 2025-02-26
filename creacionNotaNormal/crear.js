document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('guardarNota').addEventListener('click', function() {
        const nombreNota = document.getElementById('nombreNota').value;
        const notaTexto = document.getElementById('notaTexto').value;
        if (nombreNota.trim() === '') {
            alert('Por favor, ingresa un nombre para la nota.');
            return;
        }
        if (notaTexto.trim() !== '') {
            // Aquí puedes implementar la lógica para guardar la nota
            alert('Nota guardada: ' + nombreNota + ' - ' + notaTexto); // Ejemplo: muestra un mensaje
            document.getElementById('nombreNota').value = '';
            document.getElementById('notaTexto').value = ''; // Limpia el textarea
        } else {
            alert('Por favor, escribe algo en la nota.');
        }
    });
});