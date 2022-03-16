const listOfImages = [
    './imagenes-test/imagen1.jpg',
    './imagenes-test/imagen2.jpg',
    './imagenes-test/imagen3.jpg',
    './imagenes-test/imagen4.jpg',
    './imagenes-test/imagen5.jpg',
    './imagenes-test/imagen6.jpg',
    './imagenes-test/imagen7.jpg',
    './imagenes-test/imagen8.jpg',
    './imagenes-test/imagen9.jpg',
    './imagenes-test/imagen10.jpg',
    './imagenes-test/imagen11jpg',
    './imagenes-test/imagen12.jpg',
    './imagenes-test/imagen13.jpg',
    './imagenes-test/imagen14.jpg',
];

// const selectedImage =

const queryString = window.location.search; 
const urlParams = new URLSearchParams(queryString);

const images = urlParams.get('images').split(',')

images.forEach(function(image) {
    document.querySelector('#main')
        .innerHTML += `<img src="${listOfImages[image]}">`;
});

