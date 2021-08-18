var carro = {
    color: "Blanco",
    marca: "Mazda",
    imprimir:function () {
        var salida = this.marca + " - " + this.color; 
        return salida;
    }
}

const carro2 = {
    color: "Rojo",
    marca: "Nissan",
}

//console.log(carro.imprimir());

var logCarro = function (arg1, arg2) {
    console.log("Carro: ", this.imprimir());
    console.log("Argumentos: ", arg1, arg2);
    console.log("--------------------------")
}

var logModelCarro = logCarro.bind(carro);
logModelCarro("abc","xyz");

logModelCarro.call(carro, "123","456");
logModelCarro.apply(carro, ["asd","fhd"]);

//Funciones prestadas
console.log(carro.imprimir.call(carro2));