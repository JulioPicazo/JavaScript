function miFuncion(a,b,c,d){
    if(arguments.length !== 4){
        console.error("La funcion necesita 4 parametros");
        alert("La funcion necesita 4 parametros")
        return;
    }
    console.log(a+b+c+d)
    alert(a+b+c+d)
}

miFuncion(5,4,10);