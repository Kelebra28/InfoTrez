import React from 'react';
import Contenido from '../components/Contenido/contenido';
import ContenedorCen from '../components/ContenedorCen/ContenedorCen'
import './Pages.css'
import imgContacto from '../Img/imgContacto.png'

const Contacto = props => {
    return (
        <div className="page">
            <div className="contacto">
                <div className="seccionUp">
                    <Contenido className="contenidoContacto" data={props.data}
                        parrafo={props.data.contacto.direccion}
                        parrafoDos={props.data.contacto.numero}
                        parrafoTres={props.data.contacto.email}
                    />
                </div>

                <div className="seccionDown">
                    <img className="" src={imgContacto} alt="" srcset="" />
                </div>
            </div>
        </div>
    );

}

export default Contacto;

