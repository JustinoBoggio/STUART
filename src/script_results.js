// Llama a la función cuando se carga la página
window.onload = function () {
  getCurrentDate()
  simulateData();
};


// Función para obtener la fecha actual en formato DD/MM/YYYY
function getCurrentDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // Los meses comienzan desde 0
    const year = today.getFullYear();

    // Actualizar el contenido del elemento con el ID "current-date" con la fecha actual
    document.getElementById('current-date').textContent = `${day}/${month}/${year}`;
  }


function simulateData() {
  // Simular datos que provienen de un sistema externo
  var simulatedData = {
    raza: 'Labrador',
    sexo: 'Macho',
    tiempoTotal: '5:00 min',
    distanciaRecorrida: '244 m',
    tiempoReposo: '1:52 min',
    tiempoCuriosidad: '3:12 min',
  };

  // Mostrar los datos en los campos correspondientes
  document.getElementById('raza').textContent = simulatedData.raza;
  document.getElementById('sexo').textContent = simulatedData.sexo;
  document.getElementById('tiempo-total').textContent = simulatedData.tiempoTotal;
  document.getElementById('distancia-recorrida').textContent = simulatedData.distanciaRecorrida;
  document.getElementById('tiempo-reposo').textContent = simulatedData.tiempoReposo;
  document.getElementById('tiempo-curiosidad').textContent = simulatedData.tiempoCuriosidad;

}

function mostrarModal(modalId) {
  var modal = document.getElementById(modalId);
  // Obtener la fuente desde los parámetros de la URL
  const urlParams = new URLSearchParams(window.location.search);
  var source = urlParams.get('source');
  //const source = urlParams.get('source');
  console.log('source:', source);
  console.log('modalId:', modalId);
  if(modalId == "descartarModal" && source == "library"){
    volverAlMenuPrincipal();
  }else{
    modal.style.display = 'flex';
  }
  
}

function cerrarModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = 'none';
}

function descartarResultados() {
  // Lógica para descartar resultados
  console.log('Resultados descartados');
  cerrarModal('descartarModal');
  window.location.href = 'index.html';
}

function subirOtroVideo() {
  // Lógica para redirigir a new_vid.html
  window.location.href = 'new_vid.html';
}

function volverAlMenuPrincipal() {
  // Lógica para redirigir a index.html
  window.location.href = 'index.html';
}


function imageZoom(imgID, resultID) {
  var img, lens, result, cx, cy;
  img = document.getElementById(imgID);
  result = document.getElementById(resultID);
  /* Create lens: */
  lens = document.createElement("DIV");
  lens.setAttribute("class", "img-zoom-lens");
  /* Insert lens: */
  img.parentElement.insertBefore(lens, img);
  /* Calculate the ratio between result DIV and lens: */
  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;
  /* Set background properties for the result DIV */
  result.style.backgroundImage = "url('" + img.src + "')";
  result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
  /* Execute a function when someone moves the cursor over the image, or the lens: */
  lens.addEventListener("mousemove", moveLens);
  img.addEventListener("mousemove", moveLens);
  /* And also for touch screens: */
  lens.addEventListener("touchmove", moveLens);
  img.addEventListener("touchmove", moveLens);
  function moveLens(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    /* Calculate the position of the lens: */
    x = pos.x - (lens.offsetWidth / 2);
    y = pos.y - (lens.offsetHeight / 2);
    /* Prevent the lens from being positioned outside the image: */
    if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
    if (x < 0) {x = 0;}
    if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
    if (y < 0) {y = 0;}
    /* Set the position of the lens: */
    lens.style.left = x + "px";
    lens.style.top = y + "px";
    /* Display what the lens "sees": */
    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}