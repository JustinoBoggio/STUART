// Función para obtener la fecha actual en formato DD/MM/YYYY
function getCurrentDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // Los meses comienzan desde 0
    const year = today.getFullYear();

    // Actualizar el contenido del elemento con el ID "current-date" con la fecha actual
    /*document.getElementById('current-date').textContent = `${day}/${month}/${year}`;*/
  }

  
  function simulateData() {
    // Simular datos que provienen de un sistema externo
    var simulatedData = {
      raza: 'Labrador',
      sexo: 'Macho',
      tiempoTotal: '8 horas',
      distanciaRecorrida: '10 km',
      tiempoReposo: '2 horas',
      tiempoCuriosidad: '6 horas',
    };
  
    // Mostrar los datos en los campos correspondientes
    document.getElementById('raza').textContent = simulatedData.raza;
    document.getElementById('sexo').textContent = simulatedData.sexo;
    document.getElementById('tiempo-total').textContent = simulatedData.tiempoTotal;
    document.getElementById('distancia-recorrida').textContent = simulatedData.distanciaRecorrida;
    document.getElementById('tiempo-reposo').textContent = simulatedData.tiempoReposo;
    document.getElementById('tiempo-curiosidad').textContent = simulatedData.tiempoCuriosidad;
    
  }
  