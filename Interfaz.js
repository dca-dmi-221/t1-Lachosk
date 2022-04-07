class Interfaz {
    constructor() {
        this.img
    }

    cargarImagen() {
        this.img = loadImage('./interfaces/Frame 4.png');
    }

    pintarImagen() {
        image(this.img, 0, 0);
    }
}