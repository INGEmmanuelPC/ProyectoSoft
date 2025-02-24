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
            date: new Date().toLocaleString()
        };
        notes.push(newNote);
        localStorage.setItem("notes", JSON.stringify(notes));

        // Limpiar campos
        titleInput.value = "";
        contentInput.value = "";

        loadNotes();
    });

    loadNotes();
});
