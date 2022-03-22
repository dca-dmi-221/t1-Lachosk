class Reproductor {
    constructor() {
        this.cancion;
        this.r = 255;
        this.g = 0;
        this.b = 0;
    }

    cargarCancion() {
        this.cancion = loadSound('Bound_2.mp3')
    }

    pintarBoton() {
        fill(this.r, this.g, this.b);
        noStroke();
        rect(600, 300, 100, 100);
    }

    hizoClick() {
        if (this.cancion.isPlaying()) {
            this.cancion.pause();
            this.r = 255;
            this.g = 0;

        } else {
            this.cancion.play();
            this.g = 255;
            this.r = 0;
        }
    }
}