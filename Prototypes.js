function Persona(){
    this.nombre = "Julio";
    this.apellido = "Picazo";
    this.edad = 22;
    this.pais = "Mexico";
}

Persona.prototype.imprimirInfo = function(){
    console.log(this.nombre +" "+  this.apellido + "(" + this.edad + ")");
}

var persona1 = new Persona();

console.log(persona1)
console.log(persona1.imprimirInfo());

Number.prototype.esPositivo = function(){
    if(this > 0){
        return true;
    }else{
        return false;
    }
}