import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import MenuIzq from '../../components/MenuIzq/MenuIzq'

const Socias = props => {
    return (
        <div className="page">
            <MenuIzq
                MenuPq1="/Socias/LERT"
                MenuPq2="/Socias/IEMS"
                contenidoP1= {props.data.socias.nombres.luz}
                contenidoP2={props.data.socias.nombres.itzia}
                display3="none"
                display4="none"
                display5="none"
                display6="none"
                display7="none"
                display8="none"
            />
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

export default Socias;