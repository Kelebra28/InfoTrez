import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import MenuIzq from '../../components/MenuIzq/MenuIzq'
import HeaderTitle from '../../components/Header/Header'

const PlanesTLC = props => {
    return (
        <div className="page">
            <MenuIzq
                MenuPq1="/DisputasComerciales/Planes-TLC"
                contenidoP1={props.data.disputas.panelesTLC.h1}
                MenuPq2="/DisputasComerciales/Planes-OMC"
                contenidoP2={props.data.disputas.panelesOMC.h1}
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
                        title={props.data.disputas.panelesTLC.h1}
                    />
                    <Contenido data={props.data}
                        // parrafo={props.data.disputas.panelesTLC.h1}
                        parrafoDos={props.data.disputas.panelesTLC.p1}
                    />
                </div>
            </section>
        </div>
    );

}

export default PlanesTLC;