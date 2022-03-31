class Sonido extends Reproductor {
    constructor() {
        super();
        this.archivo = archivo;
        this.id = id;
        this.nombre = nombre;

        this.cancionActual = 0;
        this.cambiar = 1;
        this.verificar = false;
    }


    infoCanciones(){
        
    }

    cargarCancion() {
        this.miSonido = [
            loadSound('./canciones/Cancion1'),
            loadSound('./canciones/Cancion2'),
            loadSound('./canciones/Cancion3'),
        ]
    }

    cambiarCancion() {
        this.cambiar = 1;
        this.verificar = false;
        if (modo = 'next') {
            this.cambiar = 1
            this.verificar = this.cancionActual + 1 < this.miSonido.length
        } else if (modo === 'prev') {
            this.cambiar = -1
            this.verificar = this.cancionActual - 1 > 0
        }


        if (this.verificar) {
            this.miSonido[this.cancionActual].stop();
            this.cancionActual += this.cambiar;
        } else {
            this.miSonido[this.cancionActual].stop();
            this.cancionActual = 0;
        }
    }
}