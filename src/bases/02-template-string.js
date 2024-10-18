
const nombre   = 'Fanny';
const apellido = 'Campos';

// const nombreCompleto = nombre + ' ' + apellido;

/* const nombreCompleto = ` 
${ nombre }
${ apellido } 
${ 1 + 1 }`;*/

const nombreCompleto = ` ${ nombre } ${ apellido } `;

console.log( nombreCompleto );

function getSaludo( nombre ) {
    return 'Hola ' + nombre;
}

console.log( `Este es un texto: ${ getSaludo( nombre ) }`);