const API_URL = 'https://jsonplaceholder.typicode.com';


const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if(this.readyState === 4 && this.status === 200 ){
        // 0 = UNSET, nose ha llamado el metodo open
        // 1 = OPENED, se ha llamado el metodo opened
        // 2 = HEADERS-RECIVED se esta llamando el metodo send       
        // 3 = LOARDING, esta cargando, es decir esta recibiendo la respuesta.
        // 4 = DONE, se ha completado la operacion
        
        
       const tpl = data.map((user) => 
            `<li> Nombre:${user.name} - 
                  Email: ${user.email} -
                  lat: ${user.address.geo.lat} - 
                  alt:${user.address.geo.lng},
                  Compania: ${user.company.name}
            </li>`,
        );

       HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
    }
}

xhr.addEventListener("load",onRequestHandler);
xhr.open("GET",`${API_URL}/users`);
xhr.send();