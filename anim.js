// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Hoy 21 de Marzo", time: 15 },
  { text: "Quiero decirte que eres la razón de mi vivir", time: 18 },
  { text: "Eres mi todo", time: 27 },
  { text: "la mujer que amo", time: 32 },
  { text: "La mujer que me motiva a seguir", time: 33 },
  { text: "Cada cosa que hago", time: 41 },
  { text: "O cada cosa que pienso", time: 47 },
  { text: "Tu siempre eres la razón de ello", time: 54 },
  { text: "No compre Rosas ni compre Arreglos", time: 59 },
  { text: "Pero te doy lo más preciado que tengo", time: 67 },
  { text: "Mi amor y mi anhelo", time: 72 },
  { text: "Mi paz y mi tiempo", time: 78 },
  { text: "Mi Calidez y Cariño", time: 83 },
  { text: "Mi alma y mi cuerpo", time: 91 },
  { text: "Eres la deficion de lo que es Ser Mujer", time: 97 },
  { text: "Fuerte, Dedicada y Hermosa", time: 104 },
  { text: "Valiente, Inteligente y Amorosa", time: 108 },
  { text: "Gracias por existir", time: 144 },
  { text: "Y darle a mi vida", time: 148 },
  { text: "Tantos colores y sensaciones", time: 153 },
  { text: "Tantas promesas y sueños", time: 158 },
  { text: "Gracias por ser simplemente tú", time: 164 },
  { text: "Gracias por estar ahí", time: 169 },
  { text: "Y yo siempre estare igual para tí", time: 176 },
  { text: "Te Amo", time: 183 },
  { text: "Idali Garcia Avalos", time: 188 },
  { text: "Atentamente: Tristan.", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);