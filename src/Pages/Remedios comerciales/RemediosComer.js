import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import MenuIzq from '../../components/MenuIzq/MenuIzq';
const RemediosComerciales = props => {
    return (
        <div className="page">
            <section className="areaTextContainer">
                <MenuIzq data={props.data}
                    contenidoP1= {props.data.remedios.title}
                    contenidoP2={props.data.remedios.antidumping.h1}
                    contenidoP3={props.data.remedios.subvenciones.h1}
                    contenidoP4={props.data.remedios.salvaguardias.h1}
                    contenidoP5={props.data.remedios.examenes.h1}
                    contenidoP6={props.data.remedios.reviciones.h1}
                    contenidoP7={props.data.remedios.elusion.h1}
                    contenidoP8={props.data.remedios.cobertura.h1}

                />
            {/* <Contenido data={props.data}
                    parrafo={props.data.remedios.title}
                    parrafoDos={props.data.remedios.antidumping.h1}
                    parrafoTres={props.data.remedios.subvenciones.h1}
                    parrafoCuatro={props.data.remedios.salvaguardias.h1}
                    parrafoCinco={props.data.remedios.examenes.h1}
                    parrafoSeis={props.data.remedios.reviciones.h1}
                    parrafoSiete={props.data.remedios.elusion.h1}
                    parrafoOcho={props.data.remedios.cobertura.h1}
                /> */}
            </section>
        </div>
    );

}

export default RemediosComerciales;