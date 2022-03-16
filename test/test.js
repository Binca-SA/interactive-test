document.querySelector('button').addEventListener('click', function(){
    //aqui me gusrdo todo los elementos del formulario//
    const elements = document.forms.joya.elements;

    const images = [
        elements.primera.value,
        elements.segunda.value,
        elements.tercera.value,
        elements.cuarta.value,
        elements.quinta.value,
        elements.sexta.value,
        elements.septima.value,
    ]

    // const primeroElemento = elements.primera.value;
    // const segundoElemento = elements.segunda.value;
    // const tercerElemento = elements.tercera.value;
    // const cuartoElemento = elements.cuarta.value;
    // const quintoElemento = elements.quinta.value;
    // const sextoElemento = elements.sexta.value;
    // const septimoElemento = elements.septima.value;

    let test = '';
    images.forEach(function(images){
        text =text + `${images},`;
    });

    // console.log(primeroElemento, segundoElemento);

    window.location = `./imagenes.html?images=${text}`
});


