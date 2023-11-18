

// Función para actualizar el contenido del editor desde el almacenamiento local
function actualizarEditor() {
    const editor = document.getElementById('editor');
    const contenido = localStorage.getItem('contenido') || '';
    editor.value = contenido;
  }
  
  // Función para manejar el evento de cambio en el editor
  function onChangeHandler() {
    const editor = document.getElementById('editor');
    const contenido = editor.value;
    localStorage.setItem('contenido', contenido);
  
    // Notificar a otras ventanas abiertas sobre el cambio
    if (window.broadcastChannel) {
      window.broadcastChannel.postMessage(contenido);
    }
  }
  
  // Evento de carga inicial
  window.onload = function () {
    actualizarEditor(); // Actualizar el editor al cargar la página
    const editor = document.getElementById('editor');
    editor.addEventListener('input', onChangeHandler); // Manejar cambios en el editor
  
    // Configurar el canal de difusión para la comunicación entre ventanas
    window.broadcastChannel = new BroadcastChannel('editorChannel');
    window.broadcastChannel.onmessage = function (event) {
      // Actualizar el contenido cuando se recibe un mensaje de otra ventana
      actualizarEditor();
    };
  };
  