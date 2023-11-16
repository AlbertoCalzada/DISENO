var canvas = document.getElementById("cuadricula");
var context = canvas.getContext("2d");

context.lineWidth = 1;
context.strokeStyle = "#fff";

for (var x = 0; x < 502; x += 10) {
  context.moveTo(x, 0);
  context.lineTo(x, 502);
}
for (var y = 0; y < 502; y += 10) {
  context.moveTo(0, y);
  context.lineTo(502, y);
}

context.stroke();
// Definir el color del cuadrado
context.fillStyle = "green";
// Dibujar un cuadrado verde en la esquina superior izquierda
context.fillRect(0, 0, 120, 120);
// Aplicar un sombreado en el lado derecho del rectángulo
context.shadowColor = "black";
context.shadowOffsetX = 15;
context.shadowBlur = 8;
// Definir un gradiente de color de verde a rojo
var gradient = context.createLinearGradient(0, 0, 0, 450);
gradient.addColorStop(0, "green");
gradient.addColorStop(1, "red");

// Aplicar el gradiente como el relleno del rectángulo
context.fillStyle = gradient;

// Dibujar el rectángulo en la mitad de la cuadrícula
context.fillRect(250, 100, 100, 200);
// Dibujar un círculo abajo a la izquierda
context.fillStyle = "lightblue";  // Color del círculo
context.beginPath();
context.arc(150, 402, 75, 0, 2 * Math.PI);
context.fill();
// Crear un elemento de texto
context.font = "italic 35px Arial";
context.fillStyle = "black";
context.fillText("Hola Mundo", 20, 50);
// Aplicar un sombreado al texto
context.shadowColor = "black";
context.shadowOffsetX = 5;
context.shadowOffsetY = 5;
context.shadowBlur = 6;
// Crear un elemento de texto
context.font = "italic 35px Arial";
context.fillStyle = "yellow";
context.fillText("XXX", 60, 90);
// Dibujar una línea curva desde el centro de la cuadrícula hasta el lado izquierdo
context.beginPath();
context.moveTo(0, 400); // Comenzar desde el centro
context.quadraticCurveTo(300, 500, 250, 200); // Curva cuadrática hacia la izquierda
context.lineWidth = 10;
context.strokeStyle = "black"; // Color de la línea
context.stroke();
// Guardar el estado actual del contexto
context.save();

// Aplicar una rotación al contexto (en radianes)
const rotationAngle = 0.2; // Puedes ajustar este valor para controlar la cantidad de rotación
context.translate(100, 210); // Mover el origen de rotación al punto deseado
context.rotate(rotationAngle);

// Dibujar un cuadrado rojo pequeño
context.fillStyle = "red";
context.fillRect(-20, -20, 10, 10); // El cuadrado está centrado en el origen de rotación

// Restaurar el estado previo del contexto
context.restore();

// Dibujar un cuadrado azul solo con el borde
context.save();
context.rotate(rotationAngle);
context.strokeStyle = "blue"; // Color del borde
context.lineWidth = 2; // Grosor del borde
context.strokeRect(100, 120, 20, 20); // Dibuja el cuadrado con borde
context.restore();

// Cuadrados volando
context.fillStyle = "lightblue";
for (let j = 0; j < 6; j++) {
    context.fillRect(400, 50, 75, 75);
    context.translate(50, 50);
    context.rotate(Math.PI/16);
    context.scale(0.7, 0.7);
}


