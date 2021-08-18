function determinaDato(a){
    if(a===undefined){
        console.log(a,"es undefined... no se que hacer");
    }
    if(typeof a === "number"){
        console.log(a,"es un numero");
    }
    if(typeof a === "string"){
        console.log(a,"es un texto");
    }
    if(typeof a === "object"){
        console.log(a,"es un objeto");
        if(a instanceof Number){
            console.log(a,"es objeto numerico");
        }
        if(a instanceof String){
            console.log(a,"es objeto de texto");
        }
    }

}

var a = new Number(10);
var b = new String("Julio");
var a1 = 50;
var b1 = "Cesar";

determinaDato(b);