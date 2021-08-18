try{
    throw new Error('Error de conexion');
}
catch(e){
    console.log(e);
    
}finally{
    console.log("Saliendo de el try");
}

function addErrorToDB(e){
    var dateOfError = new Date();
    console.log('Error: ',e,'a las: ',dateOfError.getDate());
}