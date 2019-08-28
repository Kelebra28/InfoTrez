import React from 'react';
import './Style.css'
const Contenido = props => {
    return (
        <div className="contenido">
            <p>{props.parrafo}</p>
            <div className={props.marginUs}>
                <p className={props.classUs}>{props.parrafoDos}</p>
                <p className={props.displayUs}>{props.parrafoTres}</p>
            </div>
            <div className={props.marginUs}>
                <p className={props.classUs}>{props.parrafoCuatro}</p>
                <p className={props.displayUs}>{props.parrafoCinco}</p>
            </div>
            <div className={props.marginUs}>
                <p   className={props.classUs}>{props.parrafoSeis}</p>
                <p className={props.displayUs}>{props.parrafoSiete}</p>
            </div>
            <p  className={props.displayUs}>{props.parrafoOcho}</p>
            <p  className={props.displayUs}>{props.parrafoNueve}</p>
            <p  className={props.displayUs}>{props.parrafoDiez}</p>
            <p  className={props.displayUs}>{props.parrafoOnce}</p>
        </div>
    )
}


export default Contenido;