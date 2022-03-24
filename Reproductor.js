class Reproductor {
    constructor() {
        this.cancion;
        this.volumen = 0.2;

        this.r = 255;
        this.g = 0;
        this.b = 0;

        this.posX;
        this.posY;

        this.posXV;
        this.posYV;

        this.posXM;
        this.posYM;


        this.radio = 50;

        this.xOffset = 0, 0
        this.yOffset = 0, 0

        this.xOffset2 = 0, 0
        this.yOffset2 = 0,

        this.xOffset3 = 0, 0
        this.yOffset3 = 0, 0

        this.sobreBola = false;
        this.bloqueada = false;

        this.sobreBola2 = false;
        this.bloqueada2 = false;

        this.sobreBola3 = false;
        this.bloqueada3 = false;
    }
}