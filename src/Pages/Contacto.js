import React from 'react';
import Contenido from '../components/Contenido/contenido';
import './Pages.css'
import imgContacto from '../Img/imgContacto.png'

const Contacto = props => {
    return (
        <section className="preventMain">
            <div className="page mainContact">
                {/* <div className="seccionUp">
                        <Contenido 
                            className="contenidoContacto" data={props.data}
                            parrafo={props.data.contacto.direccion}
                            parrafoDos={props.data.contacto.numero}
                            parrafoTres={props.data.contacto.email}
                        />
                    </div> */}
                <div className="seccionUp">
                    <p className="text-center"><b>Torre IZA BC Portal San Ángel Av. Revolución No. 1267 Piso 19 Ofc. A Col. Alpes C.P. 01010 CDMX, Álvaro Obregón</b></p>
                    <p>Conmutador: (55) 7698-0243‬</p>
                    <p>Tel. Directo T-REZ: (55) 1246-0682‬</p>
                    <a href="mailto:trez@t-rezconsulting.com">trez@t-rezconsulting.com</a>
                </div>
                <div className="seccionDown">
                    <img className="" src={imgContacto} alt="" srcset="" />
                </div>
            </div>
        </section>

    );

}

export default Contacto;

