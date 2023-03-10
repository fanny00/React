// Desestructuración
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// console.log( persona.nombre );
// console.log( persona.edad );
// console.log( persona.clave );


// const { nombre, edad, clave, } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const retornaPersona = ( { clave, nombre, edad, rango = 'Capitan' } ) => {

    console.log( nombre, edad, rango );
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const avenger = retornaPersona( persona );

console.log( avenger );

const avenger2 = retornaPersona( persona );
console.log( avenger2.nombreClave, avenger2.anios );

const { nombreClave, anios, latlng: { lat, lng } } = retornaPersona( persona );
// const { lat, lng } = latlng;
console.log( nombreClave, anios);
console.log( lat, lng );