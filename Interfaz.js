class Interfaz {
    constructor() {
        this.img
    }

    cargarImagen() {
        this.img = loadImage('1366_2000.png');
    }

    pintarImagen() {
        image(this.img, 0, 0);
    }
}