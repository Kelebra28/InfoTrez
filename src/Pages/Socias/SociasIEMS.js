import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import MenuIzq from '../../components/MenuIzq/MenuIzq'

const SociasIEMS = props => {
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
                    parrafo={props.data.socias.Itziar.title}
                    parrafoDos={props.data.socias.Itziar.p1}
                    parrafoTres={props.data.socias.Itziar.p2}
                    parrafoCuatro={props.data.socias.Itziar.p3}
                    parrafoCinco={props.data.socias.Itziar.p4}
                    parrafoSeis={props.data.socias.Itziar.p5}
                    // parrafoSiete={props.data.socias.Itziar.p1}
                    // parrafoOcho={props.data.socias.Itziar.p1}
                    // parrafoNueve={props.data.socias.Itziar.p1}
                    />
            </section>
        </div>
    );

}

export default SociasIEMS;



