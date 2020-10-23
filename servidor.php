<?php
    $tecnologias = array(
        'frontend' => 'html5, css3, javascript',
        'backend' => 'php, mysql, apache',
        'fulstack' => 'html5, css3, javascript, php, mysql, apache'
    );
    //Esto es para el ajax, lo que hace es convertir el array en un JSON
    echo json_endecode($tecnologias);
?>