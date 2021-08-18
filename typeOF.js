function identifica(param){
    console.log(typeof param);
}
identifica(10);


function identifica2(param){
    console.log(typeof param);
    console.log(param instanceof Persona);
}

function Persona(){
    this.nombre = "Julio";
    this.edad = 22;
}

var x = new Persona();
identifica2(x);