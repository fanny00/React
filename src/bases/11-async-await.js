
// const getImagenPromesa = () => {
//   const promesa = new Promise( (resolve, reject) => {
//     resolve('https://fannycamposa.cl')
//   });
//   return promesa;
// }

// const getImagenPromesa = () => new Promise( resolve  => resolve('https://fannycamposa.cl'));

// getImagenPromesa().then( console.log );

// const getImage = async() => {

//   return 'https://fannycamposa.cl';

// }

// // console.log( getImage() );

// getImage().then( console.log );


const getImagen = async() => {

  try {

    const apiKey = 'T1PoBdWotjXblN0KKg0FADn3LGjBouPv';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const { data } = await resp.json();
    const { url } = data.images.original;
  
    // console.log( url );
  
    const img = document.createElement( 'img' );
    img.src = url;
    document.body.append( img );
    
  } catch (error) {

    // Manejo del error
    console.error( error );
    
  }


}

getImagen().then();