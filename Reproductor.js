class Reproductor {
    constructor() {
        this.cancion;
        this.r = 255;
        this.g = 0;
        this.b = 0;

        this.posX;
        this.posY;


        this.posXV;
        this.posXY;



        this.radio = 50;

        this.volumen = 0;

        this.xOffset = 0, 0
        this.yOffset = 0, 0

        this.sobreBola = false;
        this.bloqueada = false;

        this.sobreBola2 = false;
        this.bloqueada2 = false;


    }

    cargarCancion() {
        this.cancion = loadSound('Bound_2.mp3')
    }

    pintarBoton() {
        this.posX = width / 2.0
        this.posY = height / 2.0

        if (
            mouseX > this.posX - this.radio &&
            mouseX < this.posX + this.radio &&
            mouseY > this.posY - this.radio &&
            mouseY < this.posY + this.radio
        ) {
            this.sobreBola = true;
            if (!this.bloqueada) {
                stroke(255);
                fill(0, 255, 0);
            }
        } else {
            stroke(156, 39, 176);
            fill(0, 255, 0, 63);
            this.sobreBola = false;
        }
        fill(this.r, this.g, this.b);
        circle(this.posX, this.posY, this.radio * 2)
    }


    botonSonido() {
        this.posXV = 200
        this.posYV = 200

        if (
            mouseX > this.posXV - this.radio &&
            mouseX < this.posXV + this.radio &&
            mouseY > this.posYV - this.radio &&
            mouseY < this.posYV + this.radio
        ) {
            this.sobreBola2 = true;
            if (!this.bloqueada2) {
                stroke(255);
                fill(0, 255, 0);
            }
        } else {
            stroke(156, 39, 176);
            fill(0, 255, 0, 63);
            this.sobreBola2 = false;
        }
        fill(150);
        circle(this.posXV, this.posYV, this.radio * 2)
    }


    hizoClickVolumen() {
        this.cancion.setVolume(this.volumen)
        this.volumen += 0.1
        if (this.sobreBola2) {
            if (this.cancion.isPlaying()) {
                this.cancion.pause();
                this.r = 255;
                this.g = 0;
            } else {
                this.cancion.play();
                this.g = 255;
                this.r = 0;
            }
            this.xOffset = mouseX - this.posX;
            this.yOffset = mouseY - this.posY;
        }
    }



    hizoClickPLay() {

        if (this.sobreBola) {
            if (this.cancion.isPlaying()) {
                this.cancion.pause();
                this.r = 255;
                this.g = 0;
            } else {
                this.cancion.play();
                this.g = 255;
                this.r = 0;
            }
            this.xOffset = mouseX - this.posX;
            this.yOffset = mouseY - this.posY;
        }
    }

}