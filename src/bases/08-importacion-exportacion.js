
// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';

// import { heroes } from './data/heroes';
// import { owners } from "./data/heroes2";
// import  heroes, { owners } from './data/heroes2';
// import { heroes, owners } from "./data/heroes2";
import  heroes, { owners } from './data/heroes2';

 // console.log( heroes );

 const getHeroeById = (id) => heroes.find( ( heroe ) => heroe.id === id );
  //{
   // return {};
   // return heroes.find( ( heroe ) => heroe.id === id );
 // }

 console.log( getHeroeById(2) );

 const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

 console.log( getHeroesByOwner('DC'));
 console.log( getHeroesByOwner('Marvel'));

 console.log( owners );