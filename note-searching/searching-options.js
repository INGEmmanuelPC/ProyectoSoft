document.addEventListener("DOMContentLoaded", function() {
  alert("Bienvenido a la sección de Búsqueda de Notas!");
});

const csButton = document.getElementById('CSButton');
const fsButton = document.getElementById('FSButton');
const ns1Button = document.getElementById('NS1Button');
const ns2Button = document.getElementById('NS2Button');
const csContent = document.getElementById('block-content-cs');
const fsContent = document.getElementById('block-content-fs');
const ns1Content = document.getElementById('block-content-ns1');
const ns2Content = document.getElementById('block-content-ns2');

// Función para cerrar todos los menús excepto el especificado
function closeOtherMenus(currentMenu) {
  [csContent, fsContent, ns1Content, ns2Content].forEach(menu => {
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

ns1Button.addEventListener('click', () => {
  closeOtherMenus(ns1Content);
  ns1Content.classList.toggle('hidden');
});

ns2Button.addEventListener('click', () => {
  closeOtherMenus(ns2Content);
  ns2Content.classList.toggle('hidden');
});

// Menús desplegables dentro de FS (ejemplo para "Notas Favoritas")
const link_folder_content_favo = document.getElementById('cont-fold-favo');
const link_notes_favo = document.getElementById('links-folder-noteFavo');

if (link_folder_content_favo && link_notes_favo) {
  link_folder_content_favo.addEventListener('click', function(event){
    event.preventDefault();
    link_notes_favo.style.display = link_notes_favo.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', function(event) {
    if (!link_notes_favo.contains(event.target) && event.target !== link_folder_content_favo) {
      link_notes_favo.style.display = 'none';
    }
  });
}

const link_folder_content_sci = document.getElementById('cont-fold-sci');
const link_notes_sci = document.getElementById('links-folder-noteScien');

if (link_folder_content_sci && link_notes_sci) {
  link_folder_content_sci.addEventListener('click', function(event){
    event.preventDefault();
    link_notes_sci.style.display = link_notes_sci.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', function(event) {
    if (!link_notes_sci.contains(event.target) && event.target !== link_folder_content_sci) {
      link_notes_sci.style.display = 'none';
    }
  });
}