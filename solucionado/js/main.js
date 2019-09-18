var form = document.querySelector('form');
var modal = document.querySelector('.modal');
var movies = document.querySelector('.movies');
var messages = document.querySelector('#messages');
var modalBottonCerrar = document.querySelector('.icon-cerrar');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.querySelector('[name="nombre"').value;
    var cantidad = document.querySelector('[name="cantidad"').value;
    var confirm = document.querySelector('[name="confirmacion"]');
    var movie = document.querySelector('#pelicula').textContent;

    //solo tenemos que controlar que el usuario haya puesto algún valor en nuestros inputs.
    if (!name || !cantidad || confirm.checked == false) {
        messages.textContent = 'Debes completar los campos para que podamos generar el ticket';
    } else {
        createTicket(name, cantidad, movie);
        messages = '';
    }
})

modalBottonCerrar.addEventListener('click', function() {
    modal.classList.add('hidden');
});

movies.addEventListener('click', function (e) {
    if (e.target.nodeName == 'BUTTON') {
        var movie = e.target.parentNode.getAttribute('data-image');
        modal.classList.remove('hidden');
        var pelicula = document.querySelector('#pelicula');
        pelicula.textContent = movie;
        return movie;
    }
})

function createTicket(name, quantity, movie) {
    var div = document.createElement('div');
    div.classList.add('modal-container');
    var title = document.createElement('h2');
    title.textContent = movie;
    var paragraph = document.createElement('p');
    paragraph.textContent = 'Hemos creado un ticket para ' + name + ' por la cantidad de ' + quantity + ' para la pelicula ' + movie + '. Ya puedes pasar por el cine a disfrutarla!!';
    div.append(title,paragraph);
    modal.innerHTML = '';
    modal.append(div);
}