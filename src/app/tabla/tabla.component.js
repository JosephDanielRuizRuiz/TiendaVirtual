const imagen1 = document.getElementById('imagen1');
const imagen2 = document.getElementById('imagen2');
const imagen3 = document.getElementById('imagen3');
const imagen4 = document.getElementById('imagen4');

const CargarImagen = (entradas, observador) => {
    entradas.forEach((entrada)=>{
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');/*Cuando entra una imagen le agrega la clase*/
        } else{
            //entrada.target.classList.remove('visible');
        }
    });
}

const Observador = new IntersectionObserver(CargarImagen, {
    root: null, //Es el viewport osea la ventana del computador
    rootMargin: '0px 0px 0px 0px', //Es agregar una margen al observador
    threshold: 1.0//Ejecute el codigo cuando toda la imagen este dentro del viewport

});

Observador.observe(imagen1);
Observador.observe(imagen2);
Observador.observe(imagen3);
Observador.observe(imagen4);