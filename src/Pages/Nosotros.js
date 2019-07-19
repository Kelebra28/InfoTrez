import React from 'react';
import HeaderTitle from '../components/Header/Header'
import Contenido from '../components/Contenido/contenido';
import ContenedorCen from '../components/ContenedorCen/ContenedorCen'


const Nosotros = props => {
    return (
        <div className="page">
        <section className="seccionCentro">
            <HeaderTitle data={props.data}
                title={props.data.nosotros.title}
            />
            <Contenido data={props.data}
                // parrafo={props.data.nosotros.title}
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
