
import { getHeroeById } from './bases/08-importacion-exportacion'

// const promesa = new Promise( (resolve, reject) => {

//   setTimeout(() => {
//     // console.log('2 segundos después');
//     // Tarea
//     const heroe = getHeroeById(2);
//     // console.log(heroe)
//     resolve( heroe );
//     reject( 'No se pudo encontrar al héroe');
//   }, 2000 );

// });

// promesa.then( (heroe) => {

//   console.log('Heroe: ', heroe);

// }).catch( err => console.warn( err ) );

const getHeroeByIdAsync = ( id ) => {

  return new Promise( (resolve, reject) => {

    setTimeout(() => {
      // console.log('2 segundos después');
      // Tarea
      const heroe = getHeroeById(id);
      // console.log(heroe)
      if(heroe){
        resolve( heroe );
      } else {
        reject( 'No se pudo encontrar al héroe');
      }
      
    }, 2000 );
  
  });

 // return promesa;

}

getHeroeByIdAsync(1)
.then( // (heroe) => // {
  // console.log('Heroe: ', heroe);
  console.log
//}
).catch( 
  // err => console.warn( err )
  console.warn
);

