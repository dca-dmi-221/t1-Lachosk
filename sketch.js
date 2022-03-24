interfaz = new Interfaz;
reproductor = new Reproductor;
boton = new Boton;

function preload() {
  interfaz.cargarImagen();
}

function setup() {
  createCanvas(1366, 799);
  interfaz.pintarImagen();
  boton.cargarCancion();
}

function draw() {
  boton.botones();
}


function mousePressed() {
  boton.interaccionClick()
}