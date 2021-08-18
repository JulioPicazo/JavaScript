function Jugador(nombreJugador){
    this.nombreJugador = nombreJugador;
    this.pv = 100;
    this.hp = 100;

    this.curar = function(jugadorObjetovo){
        if(this.hp <= 40){
            this.hp -=40;
            jugadorObjetovo.pv += 20;
        }else{
            console.info(this.nombre + "Neceita pv");
        }
        this.estado(jugadorObjetovo);
    }

    this.disparar = function(jugadorObjetovo){
        if(jugadorObjetovo.pv > 40){
            jugadorObjetovo.pv -= 40;
        }else{
            jugadorObjetovo.pv =0;
            console.info(jugadorObjetovo.nombre + "murio!!!");
        }
        this.estado(jugadorObjetovo);
    }

    this.estado = function(jugadorObjetovo){
        console.info(this);
        console.info(jugadorObjetovo);
    }

};

var gandalf = new Jugador("Gandalf");
var legolas = new Jugador("Legolas");

console.log(gandalf);
console.log(legolas);