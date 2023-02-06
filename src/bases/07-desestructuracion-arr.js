

const personajes = ['Goku','Vegueta','Trunks'];
const [ , ,p3 ] = personajes;
console.log( p3 );

const retornaArreglo = () =>{
    return ['ABC',123];
}

const [ letras, numeros ] = retornaArreglo();
console.log( letras, numeros );

// Tarea
const estado = ( nombre ) => {
    return [ nombre, ()=> { console.log('Hola mundo')}];
}

const arr = estado( 'Goku' );

// arr[1]();

const [ nombre, setNombre ] = estado('Goku');

console.log( nombre );
setNombre();