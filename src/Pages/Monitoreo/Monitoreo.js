import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import MenuIzq from '../../components/MenuIzq/MenuIzq'
import HeaderTitle from '../../components/Header/Header'
import ContenedorDer from '../../components/contenedorDer/contenedorDer';
import imgLap from '../../Img/economia.png'


const Monitoreo = props => {
    return (
        <section className="preventMain">
            <div className="page main">
                <MenuIzq
                    href1="#monitoreo"
                    href2="#alertas"
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
                    imgMenuIzq={imgLap}
                />
                <section className="seccionCentro">
                    <HeaderTitle data={props.data}
                        title={props.data.monitoreos.title}
                    />
                    <HeaderTitle
                        id="monitoreo"
                        data={props.data}
                        title2={props.data.monitoreos.menu.p1}
                    />
                    <Contenido
                        data={props.data.industrias.agropecuario.h1}
                        // parrafo={props.data.industrias.agropecuario.h1}
                        parrafoDos={props.data.monitoreos.monitoreo.p1}
                        parrafoTres={props.data.monitoreos.monitoreo.p2}
                    />
                    <HeaderTitle
                        id="alertas"
                        data={props.data}
                        title2={props.data.monitoreos.menu.p2}
                    />
                    <Contenido
                        data={props.data.industrias.agropecuario.h1}
                        // parrafo={props.data.industrias.agropecuario.h1}
                        parrafoDos={props.data.monitoreos.alertas.p1}
                    />
                </section>
                <ContenedorDer  data={props.data}/>
            </div>
        </section>

    );


}

export default Monitoreo;