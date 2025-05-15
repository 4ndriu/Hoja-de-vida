// Espera a que todo el contenido HTML esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function () {

  // Selecciona el botón con id="theme-toggle" (el botón que cambia el tema)
  const toggleBtn = document.getElementById('theme-toggle');

  // Agrega un "escuchador" de eventos para el clic en el botón
  toggleBtn.addEventListener('click', function () {
    // Cambia (agrega o quita) la clase "dark-mode" en el <body>
    document.body.classList.toggle('dark-mode');

    // Verifica si el modo oscuro está activado (si el body tiene esa clase)
    const isDark = document.body.classList.contains('dark-mode');

    // Guarda el estado actual del tema (true o false) en localStorage
    localStorage.setItem('modoOscuro', isDark);
  });

  // Al cargar la página, revisa si ya se había activado el modo oscuro antes
  const modoOscuroActivo = localStorage.getItem('modoOscuro') === 'true';

  // Si sí estaba activado, agrega la clase "dark-mode" al <body>
  if (modoOscuroActivo) {
    document.body.classList.add('dark-mode');
  }

  // Muestra un mensaje emergente de saludo al usuario al entrar a la página
  alert("¡Bienvenido a mi hoja de vida :)!");
});