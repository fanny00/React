
const apiKey = 'T1PoBdWotjXblN0KKg0FADn3LGjBouPv';

// URL web : https://api.giphy.com/v1/gifs/random?api_key=T1PoBdWotjXblN0KKg0FADn3LGjBouPv

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// peticion.then ( resp => {
//  // console.log(resp)
//   resp.json().then( data => {
//     console.log( data );
//   });
// })
// .catch( console.warn );

peticion
 .then ( resp => resp.json() )
 .then( ({ data })=> {
   // console.log( data.images.original.url );
   const { url } = data.images.original;

   const img = document.createElement( 'img' );
   img.src = url;

   document.body.append( img );

 })
 .catch( console.warn );