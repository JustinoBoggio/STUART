function displayFileDetails() {
  // Obtén el elemento del input de archivo
  var fileInput = document.getElementById('file-input');

  // Verifica si se seleccionó un archivo
  if (fileInput.files.length > 0) {
    // Obtén el archivo seleccionado
    var selectedFile = fileInput.files[0];

    // Crea un objeto de URL para la miniatura
    var thumbnailUrl = URL.createObjectURL(selectedFile);

    // Crea un nuevo div con la miniatura y el nombre del archivo
    var fileDetailsDiv = document.createElement('div');
    fileDetailsDiv.innerHTML = `
    <img src="${thumbnailUrl}" alt="Miniatura">
    <p>${selectedFile.name}</p>
`;

    // Aplica estilos CSS al fileDetailsDiv
    fileDetailsDiv.style.maxWidth = '100%'; // Ajusta según tus necesidades
    fileDetailsDiv.style.maxHeight = '100%'; // Ajusta según tus necesidades
    fileDetailsDiv.style.overflow = 'hidden';

    // Obtén el contenedor actual y reemplázalo con el nuevo div
    var fileUploadBox = document.getElementById('file-upload-box');
    fileUploadBox.innerHTML = '';
    fileUploadBox.appendChild(fileDetailsDiv);
  }
}



let progress = 0;
let processingInterval;

function startProcessing() {
  // Muestra el modal
  document.getElementById('progress-modal').style.display = 'block';

  // Inicia el proceso de procesamiento simulado
  processingInterval = setInterval(updateProgressBar, 1000);
}

function updateProgressBar() {
  // Aumenta la barra de carga en un 10%
  progress += 10;

  // Actualiza la barra de carga y el texto en el modal
  document.getElementById('progress').innerText = `${progress}%`;
  document.getElementById('progress-bar').style.width = `${progress}%`;

  // Si alcanza el 100%, termina el procesamiento
  if (progress === 100) {
    finishProcessing();
  }
}

function finishProcessing() {
  // Limpia el intervalo y oculta el modal
  clearInterval(processingInterval);
  document.getElementById('progress-modal').style.display = 'none';
  showModal();
}

function cancelProcessing() {
  // Pregunta al usuario si está seguro de cancelar
  var confirmCancel = confirm("¿Estás seguro de cancelar el procesamiento?");

  if (confirmCancel) {
    // Limpia el intervalo y oculta el modal
    clearInterval(processingInterval);
    document.getElementById('progress-modal').style.display = 'none';
    // Restaura el progreso al 0%
    progress = 0;
  }
}

function redirectToAnotherPage() {
  // Cambia 'otraPagina.html' por la URL de la página a la que deseas redirigir
  window.location.href = 'index.html';
}

function showModal() {
  // Mostrar el modal
  var modal = document.getElementById('completionModal');
  modal.style.display = 'flex';
}

function redirectToResults() {
  // El usuario seleccionó "Ver resultados"
  window.location.href = 'results.html';
}

function uploadAnotherVideo() {
  // El usuario seleccionó "Subir otro video" (recargar la página)
  window.location.reload();
}