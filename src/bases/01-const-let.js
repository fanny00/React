
// Variables y Constantes

const nombre = 'Fernando';
const apellido = 'Herrera';

let valorDado = 5;
valorDado = 4;

console.log( nombre, apellido, valorDado );

// no se debe usar el var

if ( true ) {
    let valorDado = 6;
    const nombre = 'Peter';
    console.log( valorDado, nombre );
}

console.log( valorDado, nombre );