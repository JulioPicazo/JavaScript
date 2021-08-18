var b = "Picazo";
var a = new String("Julio Picazo");

console.log(b);
console.log(a);

console.log(a.toUpperCase());
console.log(b.toLowerCase());

var i = a.indexOf(b);
console.log("La palabra esta en: ",i);

i = a.lastIndexOf("o");
console.log("La tercera letra esta: ",i);

var separa = a.split(" ");
console.log(separa);
console.log(separa.length);
//Pagina de referencia de javascript mozilla documentation

document.writeln(a.italics());
document.writeln(a.strike());
document.writeln(a.bold());
document.writeln(a.fontcolor("red"));
