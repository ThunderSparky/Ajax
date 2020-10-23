// pasos para la creación de un request

var btnCargar = document.getElementById('cargar');

function cargarContenido() {
    // crearlo
    var xhr = new XMLHttpRequest();

    // abrirlo
    xhr.open("GET", "servidor.php", true);

    // revisar que cambie
    xhr.onreadystatechange = function() {
        //console.log(xhr.readyState);

        if (xhr.readyState == 4 && xhr.status == 200) {
            //creamos una variable llamada json
            //La clase JSON, viene de javascript, utilizamos el metodo parse para convertir en JSON el texto
            var json = JSON.parse(xhr.responseText);
            //asignamos a una variable el elemento de HTMl con id contenido
            var contenido = document.getElementById('contenido');
            //A ese elemento de HTML le aplicaremos una adicion de HTML , en este caso colocamos la variable json
            //del cual podemos colocar .fullstack , o .backend, o .frontend
            contenido.innerHTML = json.fullstack;
        }
    };
    xhr.send();
}
//Ejecutamos la funcion cada vez que le damos clip
btnCargar.addEventListener('click', cargarContenido);