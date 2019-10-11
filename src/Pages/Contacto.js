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
                        <p className="text-center"><b>Torre Siglum Insurgentes Sur #1898 Piso 14 Despacho 1421 Col. Florida 01020 CDMX, México</b></p>
                        <p>(55)9171-1047/52</p>
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

