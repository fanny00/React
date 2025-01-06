
// Funciones en JS
// function saludar( nombre ){
//   return  `Hola, ${ nombre }`;
// }

// saludar = 30;

const saludar = function( nombre ) {
  return `Hola, ${ nombre }`;
}

// saludar = 20;

// Función de Flecha
const saludar2 = ( nombre ) => {
  return `Hola, ${ nombre }`;
}

// Simplificando la función de flecha
const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola mundo`;

// console.log( saludar( 'Goku' ));

console.log( saludar );
console.log( saludar2('Vegeta') );
console.log( saludar3( 'Pipe' ) );
console.log( saludar4());


const getUser = () => {
  return {
    uid: 'ABC123',
    username: 'El_Papi1502'
  }
}

// Simplificando la funcion con objeto de manera implicita
const getUser2 = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
})

const user = getUser();
const user2 = getUser2();

console.log( getUser() );
console.log( getUser2() );
console.log( user );
console.log( user2 );

// Tarea
// 1. Transformen a una función de flecha
// 2. Tiene que retornar a un objeto implicito
// 3. Pruebas

function getUsuarioActivo( nombre ) {
  return {
    uid: 'ABC567',
    username: nombre
  }
}

const usuarioActivo = getUsuarioActivo( 'Fanny' );

// Respuesta tarea
const getUsuarioActivo2 = ( nombre ) => ({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo2 = getUsuarioActivo2( 'Felipe' );

console.log( usuarioActivo );
console.log( usuarioActivo2 );