import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import HeaderTitle from '../../components/Header/Header'
import MenuIzq from '../../components/MenuIzq/MenuIzq'
import imgSocia from '../../Img/Layer2.png'
import './Socias.css'
import '../Pages.css'
const SociasIEMS = props => {
    return (
        <div className="page">
            <MenuIzq
                MenuPq1="/Socias/LERT"
                MenuPq2="/Socias/IEMS"
                contenidoP1={props.data.socias.nombres.luz}
                contenidoP2={props.data.socias.nombres.itzia}
                display3="none"
                display4="none"
                display5="none"
                display6="none"
                display7="none"
                display8="none"
            />

            <section className="seccionCentro">

                <div className="contenidoCentro">
                    <HeaderTitle data={props.data}
                        title={props.data.socias.nombres.itzia}
                    />
                    <div className="">
                        <img className="imgSocia" src={imgSocia} alt="" />
                    </div>
                    <Contenido data={props.data}
                        // parrafo={props.data.socias.Itziar.title}
                        parrafoDos={props.data.socias.Itziar.p1}
                        parrafoTres={props.data.socias.Itziar.p2}
                        parrafoCuatro={props.data.socias.Itziar.p3}
                        parrafoCinco={props.data.socias.Itziar.p4}
                        parrafoSeis={props.data.socias.Itziar.p5}
                    // parrafoSiete={props.data.socias.Itziar.p1}
                    // parrafoOcho={props.data.socias.Itziar.p1}
                    // parrafoNueve={props.data.socias.Itziar.p1}
                    />
                </div>
            </section>
        </div>
    );

}

export default SociasIEMS;



