const select = document.getElementById('tipo-segmentacion');

const inputs = {
    'edad': document.getElementById('input-edad'),
    'sexo': document.getElementById('input-sexo'),
    'ubicacion': document.getElementById('input-ubicacion'),
    'tiempo-afiliado': document.getElementById('input-tiempo-afiliado'),
    'servicio-adquirido': document.getElementById('input-servicio-adquirido')
};

select.addEventListener('change', () => {
    
    const opcionSeleccionada = select.options[select.selectedIndex];
    const valorOpcionSeleccionada = opcionSeleccionada.value;

    for(const key in inputs){
        inputs[key].style.display = 'none';
    }

    if(inputs[valorOpcionSeleccionada]){
        inputs[valorOpcionSeleccionada].style.display = 'block';
    }


    // const array = ['edad', 'sexo', 'ubicacion', 'tiempo-afiliado', 'servicio-adquirido'];

    // const opcionSeleccionada = 'ubicacion';

    // for(let i=0; i<array.length; i++){
    //     if(array[i]){
    //         inputs[opcionSeleccionada].style.display = 'block';
    //     }
    // }

    // console.log('Cambio seleccionado:', this.value);
    
});