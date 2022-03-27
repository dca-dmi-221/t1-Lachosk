interfaz = new Interfaz;
reproductor = new Reproductor;
boton = new Boton;

function preload() {
  interfaz.cargarImagen();
  let canciones = [
    loadSound("./canciones/Cancion1.mp3"),
    loadSound("./canciones/Cancion2.mp3"),
    loadSound("./canciones/Cancion3.mp3")
  ];
  boton.canciones = canciones;
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