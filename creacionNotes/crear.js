document.addEventListener("DOMContentLoaded", () => {
    const saveButton = document.getElementById("save-note");
    const titleInput = document.getElementById("note-title");
    const contentInput = document.getElementById("note-content");
    const savedNotesList = document.getElementById("saved-notes");

    // Cargar notas guardadas desde localStorage
    const loadNotes = () => {
        savedNotesList.innerHTML = "";
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.forEach(note => {
            const li = document.createElement("li");
            li.textContent = `${note.date} - ${note.title}: ${note.content}`;
            savedNotesList.appendChild(li);
        });
    };

    // Guardar una nueva nota
    saveButton.addEventListener("click", () => {
        const title = titleInput.value.trim();
        const content = contentInput.value.trim();
        if (title === "" || content === "") {
            alert("Por favor, completa ambos campos.");
            return;
        }

        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        const newNote = {
            title,
            content,
            date_time: new Date()
        };
        
        guardarNota(newNote);

        notes.push(newNote);
        localStorage.setItem("notes", JSON.stringify(notes));

        // Limpiar campos
        titleInput.value = "";
        contentInput.value = "";

        loadNotes();
    });

    loadNotes();
});

const url = 'http://127.0.0.1:3000/api/v1';
guardarNota = async (note) => {
    
    
    try {
        const response = await fetch(`${url}/notes/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
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