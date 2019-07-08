import React from 'react';
import Contenido from '../components/Contenido/contenido';
const Contacto = props => {
    return (
        <div className="page">
            <section className="areaTextContainer">
                <Contenido data={props.data}
                    parrafo={props.data.contacto.title}
                    parrafoDos={props.data.contacto.direccion}
                    parrafoTres={props.data.contacto.oficina}
                    parrafoCuatro={props.data.contacto.cp}
                    parrafoCinco={props.data.contacto.numero}
                    parrafoSeis={props.data.contacto.email}
                />
            </section>
        </div>
    );

}

export default Contacto;

