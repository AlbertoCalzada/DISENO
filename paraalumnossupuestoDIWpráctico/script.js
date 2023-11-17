var canvas = document.getElementById("cuadricula");
var context = canvas.getContext("2d");

// primer circulo
context.fillStyle = "black";
context.beginPath();
context.arc(50, 50, 25, 0, 2 * Math.PI);
context.fill();

// segundo circulo
context.beginPath();
context.arc(50, 50, 50, Math.PI, 0);
context.fill();

// tercer circulo
context.beginPath();
context.arc(50, 50, 50, 3 * Math.PI / 2, Math.PI / 2);
context.fill();

// cuarto circulo (naranja)
context.fillStyle = "orange";
context.beginPath();
context.arc(50, 45, 12.5, 0, 2 * Math.PI);
context.fill();
