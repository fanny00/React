// Funciones en Js
const saludar = function( nombre ) {
    return `Hola, ${ nombre }`;
}

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, $( nombre )`;

const saludar4 = () => `Hola Mundo`;
// saludar = 20;

console.log( saludar );
console.log( saludar('Goku') );
console.log( saludar2 );
console.log( saludar2('Vegeta') );
console.log( saludar3 );
console.log( saludar3('Trunks') );
console.log( saludar4 );
console.log( saludar4() );

const getUser = () => {
    return{
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}

console.log( getUser() );

const getUser2 = () => 
    ({
        uid: 'ABC123',
        username: 'El_Papi1502'
    })


console.log( getUser2() );

const user = getUser2();
console.log( user );

function getUsuarioActivo( nombre ) {
    return {
        uid: 'ABC567',
        username: nombre
    }
};

const getUsuarioActivo2 = ( nombre ) => ({
    uid: 'ABC567',
    username: nombre
});


const usuarioActivo = getUsuarioActivo('Fanny');
console.log( usuarioActivo );

const usuarioActivo2 = getUsuarioActivo2('Fanny');
console.log( usuarioActivo2 );