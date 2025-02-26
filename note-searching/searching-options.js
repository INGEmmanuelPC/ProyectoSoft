document.addEventListener("DOMContentLoaded", function() {
  alert("Bienvenido a la sección de Búsqueda de Notas!");
});

const csButton = document.getElementById('CSButton');
const fsButton = document.getElementById('FSButton');
const ns1Button = document.getElementById('NS1Button'); // Nuevo botón 1
const ns2Button = document.getElementById('NS2Button'); // Nuevo botón 2
const csContent = document.getElementById('block-content-cs');
const fsContent = document.getElementById('block-content-fs');
const ns1Content = document.getElementById('block-content-ns1'); // Nuevo contenido 1
const ns2Content = document.getElementById('block-content-ns2'); // Nuevo contenido 2
// ... (resto del código JS)

// Función para cerrar todos los menús excepto el especificado (modificada)
function closeOtherMenus(currentMenu) {
    [csContent, fsContent, ns1Content, ns2Content].forEach(menu => { // Añadidos los nuevos menús
        if (menu !== currentMenu && !menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
        }
    });
}

csButton.addEventListener('click', () => {
    closeOtherMenus(csContent);
    csContent.classList.toggle('hidden');
});

fsButton.addEventListener('click', () => {
    closeOtherMenus(fsContent);
    fsContent.classList.toggle('hidden');
});

ns1Button.addEventListener('click', () => { // Evento para el nuevo botón 1
    closeOtherMenus(ns1Content);
    ns1Content.classList.toggle('hidden');
});

ns2Button.addEventListener('click', () => { // Evento para el nuevo botón 2
    closeOtherMenus(ns2Content);
    ns2Content.classList.toggle('hidden');
});

const link_folder_content_favo = document.getElementById('cont-fold-favo'); /*El link que desplegará opciones*/ 
const link_notes_favo = document.getElementById('links-folder-noteFavo') /*Opciones desplegadas por el link anterior*/

link_folder_content_favo.addEventListener('click', function(event){
  event.preventDefault();
  link_notes_favo.style.display = link_notes_favo.style.display === 'block' ? 'none' : 'block'; /* Muestra u oculta el menú */
});

// Oculta el menú si se hace clic en cualquier otro lugar de la página
document.addEventListener('click', function(event) {
  if (!link_notes_favo.contains(event.target) && event.target !== link_folder_content_favo) {
    link_notes_favo.style.display = 'none';
  }
});

const link_folder_content_sci = document.getElementById('cont-fold-sci'); /*El link que desplegará opciones*/ 
const link_notes_sci = document.getElementById('links-folder-noteScien') /*Opciones desplegadas por el link anterior*/

link_folder_content_sci.addEventListener('click', function(event){
  event.preventDefault();
  link_notes_sci.style.display = link_notes_sci.style.display === 'block' ? 'none' : 'block'; /* Muestra u oculta el menú */
});

// Oculta el menú si se hace clic en cualquier otro lugar de la página
document.addEventListener('click', function(event) {
  if (!link_notes_sci.contains(event.target) && event.target !== link_folder_content_sci) {
    link_notes_sci.style.display = 'none';
  }
});


