import React from 'react';
import './Style.css'
const Contenido = props => {
    return (
        <div className="contenido">
            <p>
            {props.parrafo} <br/><br/> 
            {props.parrafoDos}<br/><br/> 
            {props.parrafoTres}<br/><br/> 
            {props.parrafoCuatro} <br/><br/> 
            {props.parrafoCinco} <br/><br/>
            {props.parrafoSeis} <br/><br/>
            {props.parrafoSiete}<br/><br/>
            {props.parrafoOcho}<br/><br/>
            {props.parrafoNueve}<br/><br/>
            {props.parrafoDiez}<br/><br/>
            {props.parrafoOnce}<br/><br/>

            </p>
        </div>
    )
}

export default Contenido;