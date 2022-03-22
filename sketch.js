interfaz = new Interfaz;
reproductor = new Reproductor;

function preload() {
  interfaz.cargarImagen();
}

function setup() {
  createCanvas(1366, 799);
  interfaz.pintarImagen();
  reproductor.cargarCancion();
}

function draw() {
  reproductor.pintarBoton();
}


function mousePressed() {
  
  reproductor.hizoClick();
  reproductor.noClick();
}