class Boton extends Reproductor {
    constructor() {
        super()
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
        this.pintarBoton();
        this.botonVolumenMas();
        this.botonVolumenMenos();
        this.botonSiguiente();
        this.botonAtras();
    }

    //Funciones de los botones
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

    botonVolumenMas() {
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

    botonVolumenMenos() {
        this.posXM = 200
        this.posYM = 400

        if (
            mouseX > this.posXM - this.radio &&
            mouseX < this.posXM + this.radio &&
            mouseY > this.posYM - this.radio &&
            mouseY < this.posYM + this.radio
        ) {
            this.sobreBola3 = true;
            if (!this.bloqueada3) {
                stroke(255);
                fill(0, 255, 0);
            }
        } else {
            stroke(156, 39, 176);
            fill(0, 255, 0, 63);
            this.sobreBola3 = false;
        }
        fill(150);
        circle(this.posXM, this.posYM, this.radio * 2)
    }

    botonSiguiente() {
        this.posXS = 300
        this.posYS = 300
        if (
            mouseX > this.posXS - this.radio &&
            mouseX < this.posXS + this.radio &&
            mouseY > this.posYS - this.radio &&
            mouseY < this.posYS + this.radio
        ) {
            this.sobreBola4 = true;
            if (!this.bloqueada4) {
                stroke(255);
                fill(0, 255, 0);

            }
        } else {
            stroke(156, 39, 176);
            fill(0, 255, 0, 63);
            this.sobreBola4 = false;
        }
        fill(155);
        circle(this.posXS, this.posYS, this.radio * 2)
    }

    botonAtras() {
        this.posXA = 100
        this.posYA = 300
        if (
            mouseX > this.posXA - this.radio &&
            mouseX < this.posXA + this.radio &&
            mouseY > this.posYA - this.radio &&
            mouseY < this.posYA + this.radio
        ) {
            this.sobreBola5 = true;
            if (!this.bloqueada5) {
                stroke(255);
                fill(0, 255, 0);

            }
        } else {
            stroke(156, 39, 176);
            fill(0, 255, 0, 63);
            this.sobreBola5 = false;
        }
        fill(155);
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
                // this.cancion.setVolume(this.volumen)
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
            this.cancion.stop()
            this.index++
            this.cargarCancion()
            this.cancion.play()
        }
        if (this.index >= 2) {
            //this.cancion.stop()
            this.index = 0
        }
        this.xOffset4 = mouseX - this.posXS;
        this.yOffset4 = mouseY - this.posYS;
        console.log(this.index + "😳")
        /// this.index;
        
    }

    hizoClickAtras() {
        if (this.sobreBola5 && this.cancion) {
            this.cancion.stop()
            this.index--
            this.cargarCancion()
            this.cancion.play()
        }
        if (this.index <= 0) {
            //this.cancion.stop()
            this.index = 0
        }
        this.xOffset5 = mouseX - this.posXA;
        this.yOffset5 = mouseY - this.posYA;
    }

}