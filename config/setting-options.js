document.addEventListener("DOMContentLoaded", function () {
  const configDropdown = document.getElementById("configDropdown");

  if (configDropdown) {
      configDropdown.addEventListener("click", function (event) {
          event.preventDefault();
          const dropdownMenu = this.nextElementSibling;
          dropdownMenu.classList.toggle("show");
      });

      document.addEventListener("click", function (event) {
          if (!configDropdown.contains(event.target)) {
              document.querySelectorAll(".dropdown-menu").forEach(menu => {
                  menu.classList.remove("show");
              });
          }
      });
  }
});