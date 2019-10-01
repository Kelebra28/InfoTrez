import React from 'react';
import './Style.css'
const Contenido = props => {
    return (
        <div className="contenido">
            <p>{props.parrafo}</p>
            <div className={props.marginUs}>
                <a href={props.href}  style={{color: "#000", textDecoration: props.Underline}} target="_blank"> <p className={props.classUs}>{props.parrafoDos}</p></a> 
                <a href={props.href2} style={{color: "#000" , textDecoration: props.Underline}} target="_blank"><p className={props.displayUs}>{props.parrafoTres}</p></a> 
            </div>
            <div className={props.marginUs}>
                <a href={props.href3} style={{color: "#000" , textDecoration: props.Underline}} target="_blank"><p className={props.classUs}>{props.parrafoCuatro}</p></a> 
                <a href={props.href4} style={{color: "#000" , textDecoration: props.Underline}} target="_blank"><p className={props.displayUs}>{props.parrafoCinco}</p></a> 
            </div>
            <div className={props.marginUs}>
                <a href={props.href5} style={{color: "#000" , textDecoration: props.Underline}} target="_blank"><p className={props.classUs}>{props.parrafoSeis}</p></a> 
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