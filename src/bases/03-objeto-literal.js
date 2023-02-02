

const persona = {
    nombre: 'tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New york',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9298658
    }
};

// console.log( { persona:persona } );
// console.log( { persona } );
// console.table( persona );
console.log( persona );

// NO HACER JAMAS
// const persona2 = persona;
// persona2.nombre = 'Peter';
// console.log( persona2 );

const persona2 = {...persona };
persona2.nombre = 'Peter';

console.log( persona2 ); 