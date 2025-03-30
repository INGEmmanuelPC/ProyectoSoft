const onGetData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/products');
      const info = await response.json();
      if (Array.isArray(info.data)) {
        const newWindow = window.open('', 'Contenido_Base_Datos');
        newWindow.document.write('<html><head><title>Datos de Productos - Agenday</title></head><body>');
        newWindow.document.write('<h1>Contenido de la Base de Datos</h1>');
        const dataList = newWindow.document.createElement('ul');
        info.data.forEach(item => {
          const listItem = newWindow.document.createElement('li');
          listItem.innerHTML = `
            <strong>Title:</strong> ${item.title || 'No title'}<br>
            <strong>Description:</strong> ${item.description || 'No description'}<br>
            <strong>ID:</strong> ${item.id_product || 'No ID'}<br>
            <strong>State ID:</strong> ${item.state_id || 'No state ID'}<br>
            <strong>Stock:</strong> ${item.stock || 'No stock'}<br>
            <strong>Value:</strong> ${item.value || 'No value'}`;
          dataList.appendChild(listItem);
        });
        newWindow.document.body.appendChild(dataList);
        newWindow.document.write('</body></html>');
        newWindow.document.close();
      } else {
        console.error('Expected an array but got:', info);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.getElementById('dropdownToggle');
    const dropdownMenu = document.getElementById('dropdownMenu');
  
    dropdownMenu.style.display = 'none'; // Ocultar al cargar
  
    dropdownToggle.addEventListener('click', function(event) {
      event.preventDefault();
      dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
    });
  
    document.addEventListener('click', function(e) {
      if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.style.display = 'none';
      }
    });
  });  