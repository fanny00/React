
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
      ciudad: 'New York',
      zip: 553581,
      lat: 14.3232,
      lng: 34.98656
    }
  };
  
  console.log ( persona );
  
  console.table ( persona );
  
  console.log( {
      //persona:persona
      persona
  } );
  
  // Asingación mal hecha, copia de referencia
  /*const persona2 = persona;
  persona2.nombre = 'Peter';
  
  console.log( persona );
  console.log( persona2 );*/
  
  
  // Clon del Objeto
  const persona2 = { ...persona };
  persona2.nombre = 'Peter';
  
  console.log( persona );
  console.log( persona2 );