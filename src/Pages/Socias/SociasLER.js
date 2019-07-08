import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import MenuIzq from '../../components/MenuIzq/MenuIzq'


const SociasLert = props => {
    return (
        <div className="page">
            <section className="areaTextContainer">
       
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
                <Contenido data={props.data}
                    parrafo={props.data.socias.Luz.title}
                    parrafoDos={props.data.socias.Luz.p1}
                    parrafoTres={props.data.socias.Luz.p2}
                    parrafoCuatro={props.data.socias.Luz.p3}
                    parrafoCinco={props.data.socias.Luz.p4}
                    parrafoSeis={props.data.socias.Luz.p5}
                    parrafoSiete={props.data.socias.Luz.p6}
                    parrafoOcho={props.data.socias.Luz.p7}
                    parrafoNueve={props.data.socias.Luz.p8}

                />
            </section>
        </div>
    );

}

export default SociasLert;