
function imprimir() {
    for(var i=0; i<=800; i++){
        console.log('Imprimir')
    }
}


function PrecionaClick() {
    console.log('Este boton es para cuand o se tenga que borrar un registro');
}

//imprimir();

//Tipos de datos primitivos

var num = 10;
var str = "texto";
var bol = true;
var und = undefined;
var nul = null;

var obj = {
    numero: 10,
    texto: "Texto 1",

    objHijo: {
        numero2: 20,
        texto2: "Texto 2"
    }
};

//Por valor y referencia


/*var a = 10;
var b = a;

console.log("a: ", a);
console.log("b: ", b);

a = 20;

console.log("a: ", a);
console.log("b: ", b);

var c = {
    nombre: "Julio"
}

var d = c;

console.log("c: ", c);
console.log("d: ", d);

c.nombre = "Cesar";

console.log("c: ", c);
console.log("d: ", d);

d.nombre = "Tony";

console.log("c: ", c);
console.log("d: ", d);
*/


//Notacion de punto y corchetes
/*var  persona = {
    nombre: "Julio",
    apellido: "Picazo",
    edad: 22,
    direccion: {
        pais: "Mexico",
        ciudad: "Aguascalientes",
        edificio : {
            nombre: "Edificio nose",
            telefono: "4492865089"
        }
    }
};

console.log(persona.direccion.pais);
console.log(persona.direccion);
persona.direccion.zipcode = 20070;
console.log(persona.direccion.zipcode);
console.log(persona.direccion.edificio.telefono);


var campo = "edad";
console.log(persona[campo]);
*/

//////////////////////////////////////////////////Funciones
//#region 
/*
function hola(){
    document.write("Hola mundo");
    console.log("Hola desde consola")
    alert("Hola mundo");
}


function imprimir(nombre,apellido){
    if(nombre === undefined || apellido === undefined) {
        console.log('Dame los parametros nmms');
    }else{
        if(nombre == "Julio" && apellido == 'Picazo'){ 
            console.log('Correcto');
            console.log('Bienvenido '+  nombre, apellido);
        }
    }
}


var miFuncion = function(){
    console.log("Funcion normal");
}

function imprimir2(fn){
    fn();
}


//funcion anonima
imprimir2(function(){
    console.log('Anonnymius')
})
//funcion normal
imprimir2(miFuncion);
//#endregion


////////////////////////////Retorno de funciones

/*function obtenerAleatorio(){
    return Math.random();
}

function obtenerNombre(){
    return "Julio";
}

function esMayor05(){
    console.log(obtenerAleatorio());
    if(obtenerAleatorio() > 0.5 ){
        return true;
    }else{
        return false;
    }
    
}

if(esMayor05()){
    console.log("Es mayor a 0.5");
}else{
    console.log("Es menor a 0.5");
}
**/
/*
function crearPersona (nombre, apellido){
    return{
        nombre: nombre,
        apellido: apellido
    }
}

var persona = crearPersona("Natalia","Paz");

function crearFuncion(){
    return function(nombre){
        if(nombre !== undefined){
            console.log("Me creo " + nombre);
            return function(){
                console.log("Segunda funcion");
            }
        }
        else{
            console.log("Pon una puta variable con nombre");
        }
    }
}

var nuevaFuncion = crearFuncion();
var SegundaFuncion = nuevaFuncion(persona.nombre);

/////////////////Metodos y this

var persona = {
    nombre: "Julio",
    apellido: "Picazo",
    imprimirNombre: function(){
        console.log(this.nombre + " " + this.apellido);
    },
    direccion: {
        pais: "Mexico",
        ImprimirPais: function(){
            
            var self = this;

            var nuevaDireccion = function(){
                console.log(self);
                console.log("La direccion es en " + self.pais);
            }
            nuevaDireccion();
        }
    }
};

persona.imprimirNombre();
persona.direccion.ImprimirPais();
*/
//////////////////////////////////////

function persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
   
        this.imprimirPersona = function(){
            return this.nombre + " " + this.apellido + " " + "(" + this.edad + ")"; 
        }
      
}

var x = new persona("Julio","Picazo",22);

console.log(x.imprimirPersona());


/////////////////////////////////////////

 
