import React from 'react';
import Contenido from '../components/Contenido/contenido';

const Nosotros = props => {
    return (
        <div className="page">
        <section className="areaTextContainer">
            {/* <div data={props.data} nombreArea={props.data.socias.Luz.title} /> */}
            <Contenido data={props.data}
                parrafo={props.data.nosotros.title}
                parrafoDos={props.data.nosotros.consultig.title}
                parrafoTres={props.data.nosotros.consultig.p}
                parrafoCuatro={props.data.nosotros.trez1.title}
                parrafoCinco={props.data.nosotros.trez1.p}
                parrafoSeis={props.data.nosotros.trez2.title}
                parrafoSiete={props.data.nosotros.trez2.p}
                // parrafoOcho={props.data.socias.Itziar.p1}
                // parrafoNueve={props.data.socias.Itziar.p1}
                />
        </section>
    </div>
    );

}

export default Nosotros;
