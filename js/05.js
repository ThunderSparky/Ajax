// pasos para la creación de un request

var btnCargar = document.getElementById('cargar');

function cargarContenido() {
    // Creando nuestra variable xhr
    var xhr = new XMLHttpRequest();

    // abrimos la conexión
    xhr.open("GET", "texto_prueba.txt", true);

    // la funcion, se ejecutará cada vez que el método onreadystatechange cambie
    xhr.onreadystatechange = function() {
        //console.log(xhr.readyState); //Esto es para ver el estado
        //Con el metodo readyState, veamos el estado, si es 4 significa que todo esta correcto y status =200 es 
        //cuando todo esta correcto
        if (xhr.readyState == 4 && xhr.status == 200) {
            //console.log("Se cargo correctamente");
            var contenido = document.getElementById('contenido');
            //El metodo innerHTML sirve para cambiar el html, y por otro lado el metodo responseText
            //retorna la respuesta como string (es como si convirtiera la respuesta en string)
            contenido.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

//Le estamos aplicando el metodo addEventListener, y dentro de ahí estamos estamos llamando a la funcion cargarContenido
btnCargar.addEventListener('click', cargarContenido);