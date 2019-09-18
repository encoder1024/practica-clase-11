form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.querySelector('[name="nombre"').value;
    var cantidad = document.querySelector('[name="cantidad"').value;
    var confirm = document.querySelector('[name="confirmacion"]');
    var movie = document.querySelector('#pelicula').textContent;

    //solo tenemos que controlar que el usuario haya puesto algún valor en nuestros inputs.
    //si no puso ningun valor, debemos cambiar la propiedad textContent de nuestra variable messages,
    //por un mensaje de error, tipo: 'Debes completar los campos para que podamos generar el ticket'

    //en el caso de que esté correcto, tenemos que llamar a la función:
    //createticket() que recibe tres parámetros: name, cantidad y movie.
    //además ponemos a messeges de nuevo en un string vacío.
})
