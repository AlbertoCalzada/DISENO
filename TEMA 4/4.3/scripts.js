var canvas = document.getElementById("miCanvas");
var ctx = canvas.getContext("2d");

// Configura el estilo de las líneas de la cuadrícula
ctx.strokeStyle = "gray"; // Color de las líneas
ctx.lineWidth = 1; // Grosor de las líneas

// Espaciado entre las líneas horizontales y verticales
var spacing = 20;

// Dibuja las líneas horizontales
for (var y = spacing; y < canvas.height; y += spacing) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
}

// Dibuja las líneas verticales
for (var x = spacing; x < canvas.width; x += spacing) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
}
// Configura el estilo del cuadrado
ctx.fillStyle = "green"; // Color de relleno del cuadrado

// Dibuja el cuadrado en la esquina superior izquierda

ctx.fillRect(0, 0, 120, 120);


//rectangulo
ctx.shadowColor = "Black";
ctx.shadowOffSetX = 10;
ctx.shadowBlur = 10;
ctx.fillStyle = "red";

ctx.fillRect(250, 100, 100, 200);


//Circulo
ctx.fillStyle = "pink"
ctx.beginPath();
ctx.arc(150, 350, 75, 0, 2 * Math.PI);
ctx.fill();


ctx.fillStyle = "purple";


//texto Hola mundo

ctx.font = "Italic 35px Arial";
ctx.fillStyle = "Black";
ctx.fillText("Hola mundo", 40, 40);

//texto XXX
ctx.font = "Italic 35px Arial";
ctx.fillStyle = "Yellow";
ctx.fillText("XXX", 50, 80);


ctx.fillStyle = "blue";


//linea curva
ctx.beginPath();
ctx.moveTo(60, 400);
ctx.quadraticCurveTo(300, 440, 370, 100);
ctx.strokeStyle = "black";
ctx.lineWidth = 6;
ctx.stroke();


//cuadrado rojo pequeño

ctx.fillStyle = "red";

ctx.fillRect(80, 200, 15, 15);




ctx.fillStyle = "blue";
for (j = 0; j < 6; j++) {
    ctx.fillRect(400, 50, 75, 75);
    ctx.translate(50, 50);
    ctx.rotate(Math.PI / 16);
    ctx.scale(0.7, 0.7);
}









//cuadrado borde azul pequeño

