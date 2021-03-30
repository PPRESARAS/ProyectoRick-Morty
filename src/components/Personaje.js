import React from 'react';

function Personaje(props){
    return(
    <React.Fragment>
        <img src= {props.datosPersonaje.image}/>
      
        <h3 className='info'>{props.datosPersonaje.name}</h3>
        <p className='info'>{props.datosPersonaje.status}-{props.datosPersonaje.species}</p>
        <p className='info'>{props.datosPersonaje.origin.name}</p>
    

    </React.Fragment>
        )
}

export default Personaje