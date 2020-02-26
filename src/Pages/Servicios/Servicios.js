import React from 'react';
import MenuIzq from '../../components/MenuIzq2/MenuIzq'
import HeaderTitle from '../../components/Header/Header'
import '../Pages.css'
import ContenedorDer from '../../components/contenedorDer/contenedorDer';
import imgPlanta from '../../Img/MONITOREO-ESTRATEGICO.png'
import CollapseCustom from '../../components/Collapse/collapse';

const Servicios = props => {
    return (
        <section className="preventMain">
            <div className="page main">
                <MenuIzq
                    MenuPq1="/Servicios/RemediosC"
                    contenidoP1={props.data.servicios.t1}
                    MenuPq2="/DisputasComerciales/"
                    contenidoP2={props.data.servicios.t2}
                    MenuPq3="/LitigiosAntidumping"
                    contenidoP3={props.data.servicios.t3}
                    MenuPq4="/EconomiaLitigios"
                    contenidoP4={props.data.servicios.t4}
                    MenuPq5="MonitoreoEstrategico/"
                    contenidoP5={props.data.servicios.t5}
                    MenuPq6="/Mx-USA-TradePlanning/"
                    contenidoP6={props.data.servicios.t6}
                    display7="none"
                    display8="none"
                    imgMenuIzq={imgPlanta}
                />
                <section className="seccionCentro">
                    <HeaderTitle data={props.data}
                        title={props.data.servicios.title}
                    />

                    {/* <p style={{margin: "0 1em"}}>{props.data.servicos.speech}</p> */}
                    <p> {props.data.servicios.p1} </p>
                    <p> {props.data.servicios.p2} </p>
                    <p> {props.data.servicios.p3} </p>
                    <p> {props.data.servicios.p4} </p>
                    <p> {props.data.servicios.p5} </p>
                    <p> {props.data.servicios.p6} </p>
                    <p> {props.data.servicios.p7} </p>
                    <p> {props.data.servicios.p8} </p>
                </section>
                <ContenedorDer  data={props.data}/>
            </div>
        </section>

    );

}

export default Servicios;