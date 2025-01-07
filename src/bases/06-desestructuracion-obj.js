
// Desestructuracion
// Asignación Desestructurante
const persona = {
  nombre: 'Tony',
  edad  :45,
  clave : 'Ironman',
  rango : 'Soldado'
};

// console.log(persona.nombre)

// Usando la asignación desestructurante y renombrando nombre a nombre2
// const { nombre:nombre2 } = persona;
// console.log( nombre2 );

// const { nombre, edad, clave } = persona;
// console.log( nombre );
// console.log( edad );
// console.log( clave );


// const retornaPersona = ( usuario ) => {

//   const { nombre, edad, clave } = persona;
//   console.log( persona )

// }

// retornaPersona( persona );


// const retornaPersona2 = ({ clave, nombre, edad, rango = 'Capitán' }) => {

const extractUseContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {
 // console.log( nombre, edad, rango )

  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.2658,
      lng: -12.5484
    }
  }

}

//const avenger = retornaPersona2( persona );
const { nombreClave, anios, latlng:{ lat, lng } } = extractUseContext( persona );
console.log( nombreClave, anios );
console.log( lat, lng );
