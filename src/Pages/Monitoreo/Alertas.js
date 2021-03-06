import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import MenuIzq from '../../components/MenuIzq/MenuIzq'
import HeaderTitle from '../../components/Header/Header'

const Alertas = props => {
    return (
        <div className="page">
            <MenuIzq
                MenuPq1="/MonitoreoEstrategico/Monitoreo-Precios"
                contenidoP1={props.data.monitoreos.menu.p1}
                MenuPq2="/MonitoreoEstrategico/Alertas-Dumping"
                contenidoP2={props.data.monitoreos.menu.p2}
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
                        title={props.data.monitoreos.alertas.h1}
                    />
                    <Contenido data={props.data}
                        //  parrafo={props.data.monitoreos.alertas.h1}
                        parrafoDos={props.data.monitoreos.alertas.p1}
                    />
                </div>
            </section>
        </div>
    );


}

export default Alertas;