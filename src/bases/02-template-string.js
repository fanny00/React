

const nombre = 'Fanny';
const apellido = 'Campos';

// const nombrecompleto = nombre + ' ' + apellido;
const nombrecompleto = `${ nombre } ${ apellido }`;

console.log( nombrecompleto );

function getSaludo( nombre ) {
    return 'Hola ' + nombre;
}

console.log(`Esto es un texto: ${ getSaludo( nombre ) }` );