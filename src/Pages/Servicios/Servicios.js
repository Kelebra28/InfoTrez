import React from 'react';
import MenuIzq from '../../components/MenuIzq/MenuIzq'

const Servicios = props => {
    return (
        <div className="page">
               <MenuIzq
                MenuPq1="/Servicios/RemediosC"
                contenidoP1= {props.data.servicos.p1}
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
            />
        <section className="areaTextContainer">
           
        </section>
    </div>
    );

}

export default Servicios;