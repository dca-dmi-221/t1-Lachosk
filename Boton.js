class Boton extends Reproductor {
    constructor(songsNumber) {
        super();
        this.songsNumber = songsNumber;
        this.canciones;
        this.index = 0;
    }
    //Carga las canciones
    cargarCancion() {
        this.cancion = this.canciones[this.index];
        this.cancion.setVolume(this.volumen)
    }
    //Recoge los metodos de pintar en un solo metodo
    botones() {
        noFill();
        //noStroke();
        this.pintarBoton();
        this.botonVolumenMas();
        this.botonVolumenMenos();
        this.botonSiguiente();
        this.botonAtras();
        this.pintarVolumen();
    }


    pintarVolumen(){
        fill(0)
        text(this.volumen,893,650)
    }

    //Funciones de los botones
    pintarBoton() {
        this.posX = 641
        this.posY = 650
        if (
            mouseX > this.posX - this.radio &&
            mouseX < this.posX + this.radio &&
            mouseY > this.posY - this.radio &&
            mouseY < this.posY + this.radio
        ) {
            this.sobreBola = true;
            if (!this.bloqueada) {
            }
        } else {
            this.sobreBola = false;
        }
        circle(this.posX, this.posY, this.radio * 2)
    }

    botonVolumenMas() {
        this.posXV = 785
        this.posYV = 650

        if (
            mouseX > this.posXV - this.radio &&
            mouseX < this.posXV + this.radio &&
            mouseY > this.posYV - this.radio &&
            mouseY < this.posYV + this.radio
        ) {
            this.sobreBola2 = true;
            if (!this.bloqueada2) {
            }
        } else {
            this.sobreBola2 = false;
        }
        circle(this.posXV, this.posYV, this.radio * 2)
    }

    botonVolumenMenos() {
        this.posXM = 492
        this.posYM = 650

        if (
            mouseX > this.posXM - this.radio &&
            mouseX < this.posXM + this.radio &&
            mouseY > this.posYM - this.radio &&
            mouseY < this.posYM + this.radio
        ) {
            this.sobreBola3 = true;
            if (!this.bloqueada3) {
            }
        } else {
            this.sobreBola3 = false;
        }
        circle(this.posXM, this.posYM, this.radio * 2)
    }

    botonSiguiente() {
        this.posXS = 710
        this.posYS = 650
        if (
            mouseX > this.posXS - this.radio &&
            mouseX < this.posXS + this.radio &&
            mouseY > this.posYS - this.radio &&
            mouseY < this.posYS + this.radio
        ) {
            this.sobreBola4 = true;
            if (!this.bloqueada4) {
            }
        } else {
            this.sobreBola4 = false;
        }
        circle(this.posXS, this.posYS, this.radio * 2)
    }

    botonAtras() {
        this.posXA = 568
        this.posYA = 650
        if (
            mouseX > this.posXA - this.radio &&
            mouseX < this.posXA + this.radio &&
            mouseY > this.posYA - this.radio &&
            mouseY < this.posYA + this.radio
        ) {
            this.sobreBola5 = true;
            if (!this.bloqueada5) {
            }
        } else {
            this.sobreBola5 = false;
        }
        circle(this.posXA, this.posYA, this.radio * 2)
    }

    //Recoge las interacciones de click en un solo metodo
    interaccionClick() {
        this.hizoClickPLay()
        this.hizoClickVolumenMas()
        this.hizoClickVolumenMenos()
        this.hizoClickSiguiente()
        this.hizoClickAtras()
    }

    //Funciones para dar click
    hizoClickPLay() {
        if (this.sobreBola) {
            if (this.cancion.isPlaying()) {
                this.volumen = 0.2;
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

    hizoClickVolumenMas() {
        if (this.sobreBola2 && this.cancion) {
            this.cancion.setVolume(this.volumen)
            this.volumen += 0.1
            if (this.volumen >= 1) {
                this.volumen = 1
            }
            console.log(this.volumen)
        }
        this.xOffset2 = mouseX - this.posXV;
        this.yOffset2 = mouseY - this.posYV;
    }

    hizoClickVolumenMenos() {
        if (this.sobreBola3 && this.cancion) {
            this.cancion.setVolume(this.volumen)
            this.volumen -= 0.1
            if (this.volumen <= 0) {
                this.volumen = 0
            }
            console.log(this.volumen)
        }
        this.xOffset3 = mouseX - this.posXM;
        this.yOffset3 = mouseY - this.posYM;
    }


    hizoClickSiguiente() {
        if (this.sobreBola4 && this.cancion) {
            if (this.index + 1 < this.songsNumber) {
                this.cancion.stop()
                this.index++
                this.cargarCancion();
                this.cancion.play()
                this.xOffset4 = mouseX - this.posXS;
                this.yOffset4 = mouseY - this.posYS;
            } else {
                this.cancion.stop();
                this.index = 0;
                this.cargarCancion();
                this.cancion.play();
            }
        }
    }

    hizoClickAtras() {
        if (this.sobreBola5 && this.cancion) {
            if (this.index != 0) {
                console.log("restando ando");
                this.cancion.stop()
                this.index--
                this.cargarCancion();
                this.cancion.play()
                this.xOffset5 = mouseX - this.posXA;
                this.yOffset5 = mouseY - this.posYA;
            } else {
                this.cancion.stop();
                this.index = 2;
                this.cargarCancion();
                this.cancion.play();
            }
        }
    }
}