const listOfImages = [
    {desc: 'Anillo de plata de primera ley con piedra lunar.', name:'Anillo Effie', price:'44€', alt:'', img:'../images/test/imagen1.webp'},
    {desc: 'Pendientes de plata de primera ley con forma de serpiente, perfectos para el lóbulo alto de la oreja ', name:'Pendientes Caeli', price:'12€', alt:'', img:'../images/test/imagen2.webp'},
    {desc: 'Pendientes con turquesa. La turquesa te ofrece bienestar al cuerpo y espíritu, considerada como amuleto desde tiempos remotos.', name:'Pendientes Naal', price:'18€', alt:'', img:'../images/test/imagen3.webp'},
    {desc: 'Pendientes de playa de primera ley 925 con detalles florales en su interior.', name: 'Pendientes Maeve', price:'19.50€', alt:'', img:'../images/test/imagen4.webp'},
    {desc: 'Pulsera elástica de plata de primera ley con piedra de ojo de tigre. La piedra del ojo de tigre es considerada la piedra de la libertad.', name:'Pulsera Alanis', price:'27€', alt:'', img:'../images/test/imagen5.webp'},
    {desc: 'Anillo de plata de primera ley con piedra lunar.', name:'Anillo Dian', price:'23€', alt:'', img:'../images/test/imagen6.webp'},
    {desc: 'Anillo de plata de primera ley con diseño de cabezas de serpeinte.', name: 'Anillo Hal', price:'23€', alt:'', img:'../images/test/imagen7.webp'},
    {desc: 'Colgante de plata de primera ley con forma de atrapasueños.', name: 'Colgante Enya', price:'20€', alt:'', img:'../images/test/imagen8.webp'},
    {desc: 'Pendientes colgantes de plata de primera ley 925.', name: 'Pendientes Miriel', price:'14€', alt:'', img:'../images/test/imagen9.webp'},
    {desc: 'Brújula en plata de ley 925', name: 'Colgante Estel', price:'25€', alt:'', img:'../images/test/imagen10.webp'},
    {desc: 'Colgante con piedra de concha. Actúa como regulador del estado de ánimo: calmar la ansiedad, la ira, la tensión y los cambios de humor.', name: 'Colgante Allene', price:'22€', alt:'', img:'../images/test/imagen11.webp'},
    {desc: 'Anillo de plata de primera ley', name: 'Anillo Glen', price:'28.50€', alt:'', img:'../images/test/imagen12.webp'},
    {desc: 'Collar de piedra amazonita. Potencia la libertad e independenciad de quien la lleva. Te aportará fortaleza mental y claridad. Tiene propiedades calmantes en situaciones de estrés, ayuda a la creatividad ayudando a expresarnos.', name: 'Collar Braeden Amazonita', price:'31.50€', alt:'', img:'../images/test/imagen13.webp'},
    {desc: 'Flor de Lotus en plata de ley 925', name: 'Colgante Lalla', price:'28€', alt:'', img:'../images/test/imagen14.webp'}
];

// const selectedImage =

const queryString = window.location.search; 
const urlParams = new URLSearchParams(queryString);

const images = urlParams.get('images').split(',')
const result = images.filter(image => image.length > 0);
result.forEach(function(image) {
    const selectedImage=listOfImages[image];
    document.querySelector('#main')
        .innerHTML += `
        <div class="container-resultsImage">
            <img alt"${selectedImage.desc}" decode="async" loading="lazy" class="container-resultsImage__imgResultTest" src="${selectedImage.img}">
            <p class="container-resultsImage__nameResult">${selectedImage.name}</p>
            <p class="container-resultsImage__nameprice">${selectedImage.price}</p>
            <p class="container-resultsImage__namedesc">${selectedImage.desc}</p>
        </div>
        `;
        
        console.log(image);
});

