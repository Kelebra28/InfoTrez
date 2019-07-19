import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import HeaderTitle from '../../components/Header/Header'
import MenuIzq from '../../components/MenuIzq/MenuIzq'
import imgSocia from '../../Img/Layer2.png'
import './Socias.css'
import '../Pages.css'

const SociasLert = props => {
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
                        title={props.data.socias.nombres.luz}
                    />
                    <div className="">
                        <img className="imgSocia" src={imgSocia} alt="" />
                    </div>
                    <Contenido data={props.data}
                        parrafo={props.data.socias.Itziar.p1}
                        parrafoDos={props.data.socias.Luz.p2}
                        parrafoTres={props.data.socias.Luz.p3}
                        parrafoCuatro={props.data.socias.Luz.p4}
                        parrafoCinco={props.data.socias.Luz.p5}
                        parrafoSeis={props.data.socias.Luz.p6}
                        parrafoSiete={props.data.socias.Luz.p7}
                        parrafoOcho={props.data.socias.Luz.p8}
                    // parrafoNueve={props.data.socias.Luz.p1}
                    />
                </div>
            </section>
        </div>
    );

}

export default SociasLert;