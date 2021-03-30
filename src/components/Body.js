import React from 'react';
import fs from 'fs';
import Personaje from './Personaje';
import arrayPersonajes from '../rickandmorty.json'

//const arrayPersonajes = fs.readFileSync('rickandmorty.json');

console.log(arrayPersonajes)

function Body() {
    return(
        <ul  className='personajes'>

        {arrayPersonajes.map(function (personaje, idx){
            return(
            <div className= 'personajeBox' key={idx}>
                <Personaje datosPersonaje={personaje}/>
            </div>
            );
        })
        }
        </ul>
    );
}



export default Body;
