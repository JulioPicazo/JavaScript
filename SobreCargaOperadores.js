function crearProducto(nombre, precio){
    nombre = nombre || "Sin nombre";
    precio = precio || 0;
    console.log("Producto: ", nombre, "Precio: ", precio);
}

function crearProducto100(nombre){
    crearProducto(nombre,100);
}

function crearProductoCamisa(precio){
    crearProducto("Chaqueta",precio)
}

crearProducto("Lapiz");
crearProducto100("Chaqueta Heroico");
crearProductoCamisa(75);