import React from 'react';
import MenuIzq from '../../components/MenuIzq2/MenuIzq'
import HeaderTitle from '../../components/Header/Header'
import '../Pages.css'
import ContenedorDer from '../../components/contenedorDer/contenedorDer';
import imgPlanta from '../../Img/planta.png'
import CollapseCustom from '../../components/Collapse/collapse';

const Servicios = props => {
    return (
        <section className="preventMain">
            <div className="page main">
                <MenuIzq
                    MenuPq1="/Servicios/RemediosC"
                    contenidoP1={props.data.servicos.p1}
                    MenuPq2="/DisputasComerciales/"
                    contenidoP2={props.data.servicos.p2}
                    MenuPq3="/LitigiosAntidumping"
                    contenidoP3={props.data.servicos.p3}
                    MenuPq4="/EconomiaLitigios"
                    contenidoP4={props.data.servicos.p4}
                    MenuPq5="MonitoreoEstrategico/"
                    contenidoP5={props.data.servicos.p5}
                    MenuPq6="/Mx-USA-TradePlanning/"
                    contenidoP6={props.data.servicos.p6}
                    display7="none"
                    display8="none"
                    imgMenuIzq={imgPlanta}
                />
                <section className="seccionCentro">
                    <HeaderTitle data={props.data}
                        title={props.data.servicos.title}
                    />

                    <p style={{margin: "0 1em"}}>{props.data.servicos.speech}</p>
                </section>
                <ContenedorDer />
            </div>
        </section>

    );

}

export default Servicios;