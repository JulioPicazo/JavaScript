var array = [5,4,3,2,1];
var nombre ="Julio";

console.log(array[0],array[4]);

array.reverse();//
console.log(array);

array = array.map(function(eleme){
    eleme *=  eleme;
    return eleme;
});
console.log(array);

array = array.map(Math.sqrt);//
console.log(array);

array = array.join("|");//
console.log(array);

array = array.split("|");//
console.log(array);

array.push("6");//
console.log(array);

array.unshift("0");//
console.log(array);

console.log(array.toString());

var eliminado = array.pop();
console.log(array, eliminado);

array.splice(6,0, "10", "20");// elimina los elementos que nosotros digamos y/o agregar
console.log(array);

array = array.slice(0,3);//Corta los elemntos hasta donde le indiquemos
console.log(array);

/////////////////////////////////////////////////////////////////////////////////////////

var array2 = [
    true,
    {
        nombre: "Julio",
        apellido: "Picazo"
    },
    function(){
        console.log("Si imprime este texto");
    },
    function(persona){
        console.log(persona.nombre + " " + persona.apellido);
    },
    [
        "Fernando",
        "Carlos",
        "Hernando",
        "Melissa",
        [
            "Juan",
            "Pedro",
            "Dilcia",
            function(){
                console.log(this);
            }
        ]
    ]
];
console.log(array2);
console.log(array2[0]);
console.log(array2[1].nombre + " " + array2[1].apellido );
array2[2]();
array2[3](array2[1]);

var cambioArray = array2[4][4]
console.log(cambioArray[1]);
cambioArray[1]="Pedrito";
console.log(cambioArray);
console.log(array2);