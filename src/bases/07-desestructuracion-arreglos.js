

// Desestru// Desestructuracion de Arreglos
// Asignación Desestructurante de Arreglos
const personajes = ['Goku','Vegeta','Trunks'];

// console.log( personajes[0] );
// console.log( personajes[1] );
// console.log( personajes[2] );

const [ , , p3 ] = personajes;
console.log( p3 );


const retornaArreglo = () => {
  return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log( letras, numeros );

// Tarea
// 1. El primer valor del arr se llamará nombre
// 2. El segundo vlor se llamará setNombre
// const arruseState = ( valor ) => {
//   return [ valor, ()=>{ console.log('Hola Mundo')} ];
// }

// const arr = arruseState( 'Goku' );

// arr[1]();

// console.log( arr );

const arruseState = ( valor ) => {
  return [ valor, ()=>{ console.log('Hola Mundo')} ];
}

const [ nombre, setNombre ]  = arruseState( 'Goku' );

console.log( nombre );
setNombre();